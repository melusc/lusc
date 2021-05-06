// ==UserScript==
// @name      Unconfirmed Marks Preact
// @version   2021.05.04b
// @author    lusc
// @include   *://moodle.ksasz.ch/
// @include   *://moodle.ksasz.ch/?*
// @updateURL https://git.io/JqltZ
// @grant     GM_xmlhttpRequest
// @grant     GM_setValue
// @grant     GM_getValue
// @grant     GM_addStyle
// @grant     GM_deleteValue
// @run-at    document-start
// @connect   www.schul-netz.com
// ==/UserScript==

if ( location.protocol !== 'https:' ) {
  location.protocol = 'https:';
}

import { render, Component, h, createRef } from 'preact';
import style from './style.scss';

import { uniqueId } from '../shared/general-functions/index';

const SvgCircleNotch = () => <svg
  aria-hidden="true"
  class="ucmr-circle-notch ucmr-spin"
  viewBox="0 0 512 512"
>
  <path
    fill="currentColor"
    d="M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z"
  />
</svg>;
type MarksRow = {
  key: string;
  course: string;
  name: string;
  date: string;
  mark: string;
};

type SchulNetzMarksState = {
  marks: Array<MarksRow> | false;
  loading: boolean;
  error: boolean;
  errorMsg: string;
  loggedOut: boolean;
  bottomHR: boolean;
};

class SchulNetzMarks extends Component {
  state: SchulNetzMarksState = {
    marks: [],
    loading: true,
    error: false,
    errorMsg: '',
    loggedOut: false,
    bottomHR:
      GM_getValue<boolean | undefined>( 'bottomHR' ) ??
      ( GM_setValue(
          'bottomHR',
          false,
      ), false ),
  };

  inputs = {
    login: createRef<HTMLInputElement>(),
    password: createRef<HTMLInputElement>(),
    page: createRef<HTMLInputElement>(),
  };

  render = (
      _properties: Record<string, unknown>,
      {
        marks,
        loading,
        error,
        errorMsg,
        loggedOut,
        bottomHR,
      }: SchulNetzMarksState,
  ) => <div class="mod-indent-outer">
    <div class="contentwithoutlink">
      <div class="ucmr-title">Unconfirmed Marks</div>

      {loading && !error && <SvgCircleNotch />}
      {!loggedOut && !error && Array.isArray( marks ) ?
        <div>
          {marks.map( ( { key, course, name, date, mark } ) => <div key={key} class="ucmr-row">
            <div class="ucmr-course">{course}</div>
            <div class="ucmr-name">{name}</div>
            <div class="ucmr-date">{date}</div>
            <div class="ucmr-mark">{mark}</div>
          </div> )}
        </div> :
        <div>Sie haben alle Noten bestätigt.</div>
      }
      {loggedOut &&
          <div class="login">
            <input
              class="form-control"
              required
              ref={this.inputs.login}
              placeholder="Username"
              type="text"
            />
            <input
              class="form-control"
              required
              ref={this.inputs.password}
              placeholder="Password"
              type="password"
            />
            <input
              class="form-control"
              required
              ref={this.inputs.page}
              placeholder="Page (ausserschwyz, einsiedeln...)"
              type="text"
            />
            <button
              class="btn btn-primary"
              type="button"
              onClick={this.handleLogin}
            >
              Save
            </button>
          </div>
      }
      {error &&
          <div class="ucmr-error">{errorMsg ?? 'Something went wrong'}</div>
      }

      {bottomHR && <hr />}
    </div>
  </div>
  ;

  handleLogin = () => {
    const login = this.inputs.login.current?.value;
    const password = this.inputs.password.current?.value;
    const page = this.inputs.page.current?.value;

    if ( login && password && page ) {
      GM_setValue(
          'login',
          login,
      );
      GM_setValue(
          'password',
          password,
      );
      GM_setValue(
          'page',
          page,
      );
      this.setState( { loggedOut: false, loading: true } );

      this.getMarks();
    }
  };

  checkCredentials = () => {
    const login = GM_getValue<string | undefined>( 'login' );
    const password = GM_getValue<string | undefined>( 'password' );
    const page = GM_getValue<string | undefined>( 'page' );

    if ( login && password && page ) {
      this.getMarks();
    }
    else {
      this.setState( { loggedOut: true, loading: false } );
    }
  };

  componentDidMount = this.checkCredentials;

  getMarks = () => {
    const login = GM_getValue<string>( 'login' );
    const password = GM_getValue<string>( 'password' );
    const page = GM_getValue<string>( 'page' );

    const loginPage = new Promise<Tampermonkey.Response<string>>( (
        resolve, reject,
    ) => {
      GM_xmlhttpRequest<string>( {
        method: 'GET',
        url: `https://www.schul-netz.com/${ page }/loginto.php`,
        onload: resolve,
        timeout: 10000,
        onerror: reject,
        onabort: reject,
        ontimeout: reject,
      } );
    } );

    const frontPage = loginPage
        .then( async ( response ) => {
          const parsed = new DOMParser().parseFromString(
              response.responseText,
              'text/html',
          );

          const loginHashElement = parsed.querySelector<HTMLInputElement>( 'input[name="loginhash"]' );

          if ( !loginHashElement ) {
            this.setState( {
              error: true,
              errorMsg: 'Could not get loginhash.',
            } as SchulNetzMarksState );

            return;
          }

          const data = new URLSearchParams( {
            loginhash: loginHashElement.value,
            login,
            passwort: password,
          } );

          return new Promise<Tampermonkey.Response<string>>( (
              resolve, reject,
          ) => {
            GM_xmlhttpRequest<string>( {
              method: 'POST',
              url: `https://www.schul-netz.com/${ page }/index.php?pageid=`,
              // cookie,
              data: data.toString(),
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
              timeout: 10000,
              onload: resolve,
              // nocache: true,
              // revalidate: true,
              onerror: reject,
              onabort: reject,
              ontimeout: reject,
            } );
          } );
        } )
        .catch( ( error ) => {
          console.error( error );
          this.setState( { loggedOut: true, loading: false } );
          for ( const value of ['login', 'password', 'page'] ) {
            GM_deleteValue( value );
          }
        } );

    void frontPage
        .then( ( response ) => {
          if ( typeof response !== 'object' ) {
            return;
          }

          if ( new URL( response.finalUrl ).pathname.endsWith( 'loginto.php' ) ) {
            for ( const value of ['login', 'password', 'page'] ) {
              GM_deleteValue( value );
            }

            this.setState( { loggedOut: true, loading: false } );
            return;
          }

          const parsed = new DOMParser().parseFromString(
              response.responseText,
              'text/html',
          );

          const h3 = [
            ...parsed.querySelectorAll<HTMLHeadingElement>( 'h3.tabletitle' ),
          ].find( ( item ) => item.textContent?.toLowerCase().trim() === 'ihre letzten noten' );

          if ( !h3 || !h3.parentElement ) {
            this.setState( {
              error: true,
              errorMsg: 'Could not find marks table.',
            } );
            return;
          }

          const table = h3.parentElement.nextElementSibling;

          if ( !( table instanceof HTMLTableElement ) ) {
            this.setState( {
              error: true,
              errorMsg: 'Table was not a table.',
            } );

            return;
          }

          const { rows } = table;
          const marks: Array<MarksRow> = [];
          let allConfirmed = false;

          for ( const row of rows ) {
            const [course, name, date, mark] = [...row.children].map( ( child ) => child.textContent?.trim() );

            if ( ( /sie haben alle noten bestätigt./i ).test( course ?? '' ) ) {
              this.setState( { marks: false } as SchulNetzMarksState );
              allConfirmed = true;
              break;
            }
            else if ( course && name && date && mark ) {
              marks.push( { course, name, date, mark, key: uniqueId() } );
            }
          }

          if ( !allConfirmed ) {
            this.setState( { marks } );
          }

          this.setState( { loading: false } );

          const anchor = [
            ...parsed.querySelectorAll<HTMLAnchorElement>( 'a.mdl-menu__item' ),
          ].find( ( item ) => item.textContent?.toLowerCase()?.trim() === 'abmelden' );

          if ( anchor && anchor.getAttribute( 'href' ) ) {
            GM_xmlhttpRequest( {
              method: 'GET',
              url: `https://www.schul-netz.com/${ page }/${
                anchor.getAttribute( 'href' ) as string
              }`,
              anonymous: true,
            } );
          }
        } )
        .catch( ( error ) => {
          console.error( error );
          this.setState( { error: true } );
        } );
  };
}

const init = () => {
  const main = document.querySelector<HTMLUListElement>( '#region-main ul.section' );
  if ( !main ) {
    return;
  }

  const li = document.createElement( 'li' );

  li.id = 'module-marks';
  li.className = 'activity label modtype_label';

  const timetablev5 = document.querySelector( '#module-timetable-v5' );

  timetablev5 ?
    timetablev5.after( li ) :
    main.prepend( li );

  render(
      <SchulNetzMarks />,
      li,
  );

  GM_addStyle( style );
};

document.readyState === 'complete' ?
  init() :
  addEventListener(
      'DOMContentLoaded',
      init,
      { once: true },
  );
