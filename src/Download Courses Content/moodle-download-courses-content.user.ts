// ==UserScript==
// @name      Moodle Download Course's Content
// @version   2021.07.13a
// @author    lusc
// @include   https://moodle.ksasz.ch/course/view.php?id=*
// @updateURL https://git.io/JqltE
// @grant     GM_getValue
// @grant     GM_setValue
// @grant     GM_deleteValue
// @grant     GM_addStyle
// @grant     GM_xmlhttpRequest
// @run-at    document-start
// @connect   *
// ==/UserScript==

import {saveAs} from 'file-saver';
import JSZip from 'jszip';
import {popupGetToken, logout} from '../shared/moodle-functions-v2';
import type {Response} from './responses.d';

const enum QueueTypes {
	download,
	link,
}

type QueueItem =
	| {
			type: QueueTypes.download;
			url: string;
			date: Date;
			filename: string;
	  }
	| {
			type: QueueTypes.link;
			url: string;
			filename: string;
			defaultURL: string;
	  };

// This is so webpack doesn't remove the metadata above
if (location.protocol !== 'https:') {
	/* This should never happen as moodle itself upgrades to https */
	location.protocol = 'https:';
}

// https://en.wikipedia.org/wiki/Filename
const sanitizeFileName = (string: string) =>
	string.replace(/["%*/:<>?\\|]/g, '_');

const formatProgress = {
	downloading: (n: number) => `Downloading (${n.toFixed(2)}%)`,
	zipping: (n: number) => `Zipping (${n.toFixed(2)}%)`,
	default: 'Save contents to zip',
} as const;

const initDownload = async (target: HTMLButtonElement) => {
	target.disabled = true;
	target.textContent = formatProgress.downloading(0);

	const token = await popupGetToken("Download Course's Content");

	const courseid = new URLSearchParams(location.search).get('id');

	if (typeof courseid !== 'string') {
		return;
	}

	const pageContentResponse = await fetch('/webservice/rest/server.php', {
		method: 'POST',
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
		},
		body: new URLSearchParams({
			// Important: "courseid" is all lowercase
			courseid,
			'options[0][name]': 'includestealthmodules',
			'options[0][value]': '1',
			wstoken: token,
			moodlewsrestformat: 'json',
			wsfunction: 'core_course_get_contents',
		}),
	});

	const jsonPageContent = (await pageContentResponse.json()) as Response;

	if ('exception' in jsonPageContent) {
		logout();
		void initDownload(target);
		return;
	}

	const zipFile = new JSZip();

	/* Using a queue allows us to show
		 the progress in percent,
		 since we then know how many items there are */
	const queue: QueueItem[] = [];

	for (const section of jsonPageContent) {
		const {modules} = section;
		const sectionName = sanitizeFileName(section.name);

		for (const module of modules) {
			const {modname} = module;
			if (modname === 'resource' || modname === 'folder') {
				const {contents} = module;

				if (contents === undefined) {
					continue;
				}

				const folderName = sanitizeFileName(module.name);

				for (const content of contents) {
					const {fileurl, filepath, timemodified: timeModified} = content;
					const filename = sanitizeFileName(content.filename);
					const date = new Date(timeModified * 1000);

					const zipFileName
						= modname === 'resource'
							? `${sectionName}/${filename}`
							: `${sectionName}/${folderName}${filepath}${filename}`;

					queue.push({
						type: QueueTypes.download,
						url: fileurl,
						date,
						filename: zipFileName,
					});
				}
			} else if (modname === 'url') {
				const url = new URL(module.url);
				// For defaultURL no "redirect"
				url.searchParams.delete('redirect');

				const defaultURL = url.href;

				url.searchParams.set('redirect', '1');

				queue.push({
					type: QueueTypes.link,
					filename: `${sectionName}/${module.name}.url`,
					url: url.href,
					defaultURL,
				});
			}
		}
	}

	const body = new URLSearchParams({token});

	for (const [i, item] of queue.entries()) {
		target.textContent = formatProgress.downloading((i * 100) / queue.length);

		const {filename, url} = item;

		if (item.type === QueueTypes.download) {
			const {date} = item;

			const response = await fetch(url, {
				body,
				method: 'POST',
				headers: {
					'content-type': 'application/x-www-form-urlencoded',
				},
			});

			const blob = await response.blob();

			zipFile.file(filename, blob, {date});
		} else {
			const {defaultURL} = item;
			const defaultFile = `[InternetShortcut]\nURL=${defaultURL}`;

			const internetShortcut = await new Promise<string>(resolve => {
				GM_xmlhttpRequest({
					url,
					method: 'HEAD',
					onerror: () => {
						resolve(defaultFile);
					},
					ontimeout: () => {
						resolve(defaultFile);
					},
					onload: ({finalUrl}) => {
						resolve(`[InternetShortcut]\nURL=${finalUrl}`);
					},
				});
			});

			zipFile.file(filename, internetShortcut);
		}
	}

	target.textContent = formatProgress.zipping(0);

	let blob: Blob;
	try {
		blob = await zipFile.generateAsync(
			{
				type: 'blob',
				compression: 'DEFLATE',
				compressionOptions: {
					level: 5,
				},
				comment: 'https://github.com/melusc/moodle_userscripts',
			},
			({percent}) => {
				target.textContent = formatProgress.zipping(percent);
			},
		);
	} catch (error: unknown) {
		console.error(error);
		return;
	}

	saveAs(
		blob,
		`course-${courseid}_${new Date().toISOString().replace(/:/g, '-')}.zip`,
	);

	target.disabled = false;
	target.textContent = formatProgress.default;
};

const init = () => {
	if (document.querySelector('#region-main div.errorbox.alert.alert-danger')) {
		return;
	}

	const saveButton = document.createElement('button');
	saveButton.textContent = formatProgress.default;
	saveButton.className = 'btn btn-secondary dcc-btn-loading';
	saveButton.type = 'button';

	const header = document.querySelector(
		'#page-header div.card > div.card-body > div.d-flex',
	);
	if (!header) {
		return;
	}

	header.append(saveButton);

	saveButton.addEventListener('click', event_ => {
		event_.stopImmediatePropagation();

		if (!saveButton.disabled) {
			void initDownload(saveButton);
		}
	});
};

if (document.readyState === 'complete') {
	init();
} else {
	addEventListener('DOMContentLoaded', init, {once: true});
}
