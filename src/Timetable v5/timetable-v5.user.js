// ==UserScript==
// @name      Moodle Timetable v5
// @version   2021.02.23a
// @author    lusc
// @updateURL https://github.com/melusc/moodle_userscripts/raw/main/dist/Timetable%20v5/timetable-v5.user.js
// @include   *://moodle.ksasz.ch/
// @include   *://moodle.ksasz.ch/?*
// @include   *://moodle.ksasz.ch/timetable/v5*
// @grant     GM_addValueChangeListener
// @grant     GM_setValue
// @grant     GM_getValue
// @grant     GM_deleteValue
// @grant     GM_registerMenuCommand
// @grant     GM_addStyle
// @grant     GM_notification
// @run-at    document-start
// ==/UserScript==

if ( location.protocol !== 'https:' ) {
  location.protocol = 'https:';
}

import { render, Component, Fragment, h, createRef } from 'preact';
import { getCourses } from '../shared/moodle-functions/index.js';

import frontPageStyle from './frontpage.scss';
import settingsPageStyle from './settingspage.scss';

const MOODLE_ICON
  = 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2074%2051%22%3E%3Cpath%20fill%3D%22%23f98012%22%20d%3D%22M61.9%2050.3V27.4c0-4.8-2-7.2-5.9-7.2-4%200-5.9%202.4-5.9%207.2v22.9H38.4V27.4c0-4.8-1.9-7.2-5.8-7.2-4%200-5.9%202.4-5.9%207.2v22.9H15V26.1c0-5%201.7-8.8%205.2-11.3%203-2.3%207.2-3.4%2012.4-3.4%205.3%200%209.2%201.4%2011.6%204.1%202.2-2.7%206.1-4.1%2011.8-4.1%205.2%200%209.3%201.1%2012.4%203.4%203.5%202.6%205.2%206.3%205.2%2011.3v24.3H61.9z%22%2F%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M37.6%209.5L49.2%201%2049%20.6C28.1%203.1%2018.6%204.9.7%2015.4l.2.5h1.4c-.1%201.4-.4%205-.1%2010.4-2%205.8%200%209.7%201.8%2014%20.3-4.4.3-9.3-1.1-14.1-.3-5.3%200-8.8.1-10.2h11.9s-.1%203.6.4%207c10.7%203.7%2021.4%200%2027.1-9.2-1.7-1.9-4.8-4.3-4.8-4.3z%22%2F%3E%3C%2Fsvg%3E';

const NOTIFICATION_ICON = 'https://i.imgur.com/ZtPH8v7.png';
const initFrontpage = () => {
  GM_registerMenuCommand(
    'Open settings',
    () => {
      open(
        '/timetable/v5',
        '_blank'
      );
    }
  );

  GM_registerMenuCommand(
    'Toggle holiday',
    () => {
      GM_setValue(
        'isHoliday',
        !GM_getValue( 'isHoliday' )
      );
    }
  );

  GM_addStyle( frontPageStyle );

  const main = document.querySelector( '#region-main-box ul.section' );
  const li = document.createElement( 'li' );

  li.id = 'module-timetable-v5';
  li.className = 'activity label modtype_label';
  main.prepend( li );

  render(
    <FrontPage />,
    li
  );
};

const initSettingsPage = () => {
  history.replaceState(
    {},
    '',
    '/timetable/v5'
  );
  const { body, head } = document;
  while ( head.lastChild ) {
    head.lastChild.remove();
  }

  while ( body.lastChild ) {
    body.lastChild.remove();
  }

  document.title = 'Moodle timetable v5';

  const icon = document.createElement( 'link' );

  icon.rel = 'shortcut icon';
  icon.href = MOODLE_ICON;

  GM_addStyle( settingsPageStyle );

  head.append( icon );

  const root = document.createElement( 'div' );

  root.id = 'root';
  body.append( root );

  render(
    <SettingsPage />,
    root
  );
};

const defaultTimes = () => [
  { from: '08:00', parsedfrom: 480, parsedto: 525, to: '08:45' },
  { from: '08:45', parsedfrom: 525, parsedto: 570, to: '09:30' },
  { from: '09:50', parsedfrom: 590, parsedto: 635, to: '10:35' },
  { from: '10:40', parsedfrom: 640, parsedto: 685, to: '11:25' },
  { from: '11:30', parsedfrom: 690, parsedto: 735, to: '12:15' },
  { from: '12:15', parsedfrom: 735, parsedto: 790, to: '13:10' },
  { from: '13:10', parsedfrom: 790, parsedto: 835, to: '13:55' },
  { from: '13:55', parsedfrom: 835, parsedto: 880, to: '14:40' },
  { from: '14:50', parsedfrom: 890, parsedto: 935, to: '15:35' },
  { from: '15:35', parsedfrom: 935, parsedto: 975, to: '16:15' },
];
let settingsPageSetState;
const SettingsPage = ( () => {
  const DAYS = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ];
  const createTable = () => {
    const array = [];

    for ( let index = 0, l = DAYS.length; index < l; ++index ) {
      const storedValue = GM_getValue( 'days' )?.[ index ];

      if ( storedValue ) {
        array[ index ] = storedValue.map( ( { from, to, content, id } ) => ( {
          from: parseTimeToString( from ),
          parsedfrom: from,
          to: parseTimeToString( to ),
          parsedto: to,
          id,
          content,
          uuid: generateUUIDv4(),
        } ) );
      }
      else {
        array[ index ] = defaultTimes();
      }
    }

    return array;
  };

  let activeDay = new Date().getDay() - 1;

  if ( activeDay === -1 || activeDay === 5 ) {
    activeDay = 0;
  }

  return class SettingsPage extends Component {
    state = {
      activeDay,
      tables: createTable(),
      focusedElement: {
        top: undefined,
        left: undefined,
        height: undefined,
        inputText: '',
        idInput: undefined,
        contentInput: undefined,
      },
      courses: [],

      loggedOut: false,
      loggedOutCallback: undefined,
    };

    inputs = {
      username: createRef(),
      password: createRef(),
    };

    saveButtonRef = a => {
      this.saveButton = a;
    };

    render(
      _properties,
      {
        activeDay,
        tables,
        courses,
        focusedElement: { top, left, height, inputText } = {},
      }
    ) {
      return (
        <>
          {this.state.loggedOut
            && <div class="login-popup">
              <div class="vertical-horizontal-center">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Login</h5>
                    <input
                      placeholder="Username"
                      required
                      class="input-group-text"
                      ref={this.inputs.username}
                    />
                    <input
                      placeholder="Password"
                      required
                      class="input-group-text"
                      ref={this.inputs.password}
                      type="password"
                    />
                  </div>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={this.handleLoginClick}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          }
          <div class="container">
            <div class="table-center">
              <div class="grid-buttons">
                <ButtonGrid
                  day={DAYS[ activeDay ]}
                  handleSave={this.handleSave}
                  saveButtonRef={this.saveButtonRef}
                  handleClick={this.handleCaretClick}
                />
              </div>
              <div
                class="main-table"
                onKeyDown={this.handleTableKeyDown}
                onInput={this.handleTableInput}
                onClick={this.handleTableClick}
              >
                <Table
                  content={tables[ activeDay ]}
                  handleFocus={this.handleTableFocus}
                />
                <div class="row-icon-add-row">
                  <div class="icon-add-row" onClick={this.createRow}>
                    <SvgIconAdd />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {typeof top === 'number' // If top is type num all are
            && <div
              class="suggestions"
              style={{ transform: `translate(${ left }px, ${ top + height }px)` }}
              onClick={this.handleSuggestionsClick}
            >
              {this.filterCourses(
                courses,
                inputText
              ).map( ( { id, name } ) => {
                const index = name.toLowerCase().indexOf( inputText );
                const before = name.slice(
                  0,
                  index
                );

                const after = name.slice( index + inputText.length );

                return (
                  <div key={id} class="suggestion" data-id={id}>
                    <div class="suggestion-name">
                      {before}
                      <span class="emphasised">
                        {name.slice(
                          index,
                          index + inputText.length
                        )}
                      </span>
                      {after}
                    </div>
                    <div class="suggestion-id">{id}</div>
                  </div>
                );
              } )}
            </div>
          }
        </>
      );
    }

    handleLoginClick = () => {
      const username = this.inputs.username.current.value.trim();
      const password = this.inputs.password.current.value;

      this.state.loggedOutCallback( { username, password } );
    };

    handleSuggestionsClick = event_ => {
      const { target } = event_;
      const suggestion = target.closest( '.suggestion' );

      if ( suggestion ) {
        const { idInput, contentInput } = this.state.focusedElement;
        const { id } = suggestion.dataset;
        const inputRow = idInput.closest( '.table-row' );
        const table = inputRow.parentNode;
        const index = [ ...table.children ].indexOf( inputRow );

        this.setState(
          state => {
            const { activeDay, tables } = state;
            const object = tables[ activeDay ];

            object[ index ].id = id;

            return {};
          },
          () => {
            focusTarget( contentInput );
          }
        );
      }
    };

    fetchCourses = () => {
      getCourses(
        false,
        settingsPageSetState
      ).then( coursesObject => {
        const courses = Object.entries( coursesObject ).map( ( [ id, fullname ] ) => ( {
          id,
          name: fullname,
          uuid: generateUUIDv4(),
        } ) );

        this.setState( { courses } );
      } );
    };

    componentDidMount = () => {
      settingsPageSetState = this.setState.bind( this );
      addEventListener(
        'click',
        this.handleTableFocus
      );
      addEventListener(
        'keydown',
        event_ => {
          if ( event_.ctrlKey && event_.key === 's' ) {
            event_.preventDefault();
            event_.stopImmediatePropagation();

            this.handleSave();
          }
        }
      );

      this.fetchCourses();
    };

    filterCourses = (
      array, inputText
    ) => {
      const returnArray = [];
      const regex = new RegExp(
        inputText,
        'i'
      );

      for ( let index = 0, l = array.length; index < l; ++index ) {
        if ( regex.test( array[ index ].name ) ) {
          returnArray.push( {
            ...array[ index ],
            index: array[ index ].name.toLowerCase().indexOf( inputText ),
          } );
        }
      }

      returnArray.sort( (
        { index: indexA }, { index: indexB }
      ) => indexA - indexB );

      return returnArray;
    };

    handleTableFocus = event_ => {
      const { target } = event_;
      let idInput;
      let contentInput;
      let top;
      let left;
      let height;
      let inputText = '';

      if ( target.dataset.type === 'id' ) {
        idInput = target;
        contentInput = target.parentNode.querySelector( '[data-type="content"]' );
      }
      else if ( target.dataset.type === 'content' ) {
        idInput = target.parentNode.querySelector( '[data-type="id"]' );
        contentInput = target;
      }

      if ( idInput ) {
        // <from jquery>
        const rect = idInput.getBoundingClientRect();
        const win = idInput.ownerDocument.defaultView;

        top = rect.top + win.pageYOffset;
        left = rect.left + win.pageXOffset;
        // </from jquery>

        height = idInput.clientHeight;
        inputText = contentInput.textContent.trim().toLowerCase();
      }

      this.setState( {
        focusedElement: {
          top,
          left,
          height,
          inputText,
          idInput,
          contentInput,
        },
      } );
    };

    handleSave = () => {
      let anyInvalid = false;
      let dayInvalid;
      const days = [];

      for ( let index0 = 0, l = this.state.tables.length; index0 < l; ++index0 ) {
        const table = this.state.tables[ index0 ];
        const day = [];

        days.push( day );

        for ( let index1 = 0, l2 = table.length; index1 < l2; ++index1 ) {
          const row = table[ index1 ];
          const { parsedfrom, parsedto, content, id } = row;
          const validRow = this.testRow( row );

          if ( !validRow && !anyInvalid ) {
            anyInvalid = true;
            dayInvalid = index0;
          }

          const object = { from: parsedfrom, to: parsedto };

          if ( id ) {
            object.id = id;
          }

          if ( content ) {
            object.content = content;
          }

          day.push( object );
        }
      }

      const { saveButton } = this;

      saveButton.classList.remove(
        'save-failed',
        'save-successful'
      );

      if ( anyInvalid ) {
        this.setState( {
          activeDay: dayInvalid,
          notificationMsg: 'Found an invalid entry',
        } );
        saveButton.classList.add( 'save-failed' );
      }
      else {
        GM_setValue(
          'days',
          { ...days }
        );

        saveButton.classList.add( 'save-successful' );
      }
    };

    testRow = ( { from, to } ) => {
      const fromValid = timeStringIsValid( from );
      const toValid = timeStringIsValid( to );

      return fromValid && toValid;
    };

    handleTableClick = event_ => {
      const { target } = event_;
      const iconRemoveRow = target.closest( '.remove-row' );

      if ( iconRemoveRow ) {
        const currentRow = target.closest( '.table-row' );
        const rowIndex = [ ...target.closest( '.table' ).children ].indexOf( currentRow );

        this.setState( state => {
          const { activeDay, tables } = state;

          tables[ activeDay ].splice(
            rowIndex,
            1
          );
          return {
            tables,
          };
        } );
      }
    };

    handleCaretClick = event_ => {
      const closestDiv = event_.target.closest( 'div' );

      if ( !closestDiv ) {
        return;
      }

      const { classList } = closestDiv;

      if ( classList.contains( 'caret-input' ) ) {
        const type = classList.contains( 'caret-forward' )
          ? 1
          : -1;

        this.setState( state => {
          let activeDay = state.activeDay + type;

          if ( activeDay < 0 ) {
            activeDay = 4;
          }
          else if ( activeDay > 4 ) {
            activeDay = 0;
          }

          return {
            activeDay,
          };
        } );
      }
    };

    createRow = async () => {
      await new Promise( resolve => {
        this.setState(
          state => {
            const { tables } = state;

            tables[ state.activeDay ]?.push( { uuid: generateUUIDv4() } );

            return {
              tables,
            };
          },
          resolve
        );
      } );
    };

    validateTimeOrder = array => {
      for ( let index = 0, l = array.length; index < l; ++index ) {
        const currentFrom = array[ index ].parsedfrom;
        const currentTo = array[ index ].parsedto;
        let isCurrentValid = true;

        if ( Number.isInteger( currentFrom ) && Number.isInteger( currentTo ) ) {
          if ( currentFrom > currentTo ) {
            array[ index ].fromvalid = false;
            array[ index ].tovalid = false;
            isCurrentValid = false;
          }
          else {
            delete array[ index ].fromvalid;
            delete array[ index ].tovalid;
          }
        }

        if ( index !== 0 ) {
          const previousTo = array[ index - 1 ].parsedto;

          if ( Number.isInteger( previousTo ) && Number.isInteger( currentFrom ) ) {
            if ( currentFrom < previousTo ) {
              array[ index ].fromvalid = false;
              array[ index - 1 ].tovalid = false;
            }
            else {
              if ( isCurrentValid ) {
                delete array[ index ].fromvalid;
              }

              delete array[ index - 1 ].tovalid;
            }
          }
        }

        if ( index < l - 1 ) {
          const nextFrom = array[ index + 1 ].parsedfrom;

          if ( Number.isInteger( currentTo ) && Number.isInteger( nextFrom ) ) {
            if ( nextFrom < currentTo ) {
              array[ index ].tovalid = false;
              array[ index + 1 ].fromvalid = false;
            }
            else {
              if ( isCurrentValid ) {
                delete array[ index ].tovalid;
              }

              delete array[ index + 1 ].fromvalid;
            }
          }
        }
      }
    };

    handleTableInput = event_ => {
      const { target, parentNode: parent } = event_;
      const {
        classList,
        textContent: rawText,
        dataset: targetDataset,
      } = target;
      const currentRow = target.closest( '.table-row' );

      if ( !currentRow ) {
        return;
      }

      const currentRowIndex = [ ...currentRow.parentNode.children ].indexOf( currentRow );
      const { anchorOffset } = getSelection();

      if ( classList.contains( 'time-input' ) ) {
        const time = rawText.trim();

        this.setState(
          state => {
            const { activeDay, tables } = state;
            const object = tables[ activeDay ][ currentRowIndex ];

            object[ classList.contains( 'time-from' )
              ? 'from'
              : 'to' ] = time;
            object[
              `parsed${ classList.contains( 'time-from' )
                ? 'from'
                : 'to' }`
            ] = this.parseStringToTime( time );

            this.validateTimeOrder( tables[ activeDay ] );

            return { tables };
          },
          () => {
            focusTarget(
              target,
              anchorOffset
            );
          }
        );
      }
      else if ( parent.classList.contains( 'entry' ) ) {
        this.handleTableFocus( event_ );
        this.setState(
          state => {
            const { activeDay, tables } = state;
            const object = tables[ activeDay ][ currentRowIndex ];

            if ( targetDataset.type === 'id' ) {
              object.id = rawText;
            }
            else if ( targetDataset.type === 'content' ) {
              object.content = rawText;
              target.textContent = '';
              /* This fixes an issue where preact doesn't
              properly delete a text node and which causes duplicate text */
            }

            return { tables };
          },
          () => {
            focusTarget(
              target,
              anchorOffset
            );
          }
        );
      }
    };

    parseStringToTime = ( () => {
      const input = document.createElement( 'input' );

      input.type = 'time';

      return raw => {
        const string = raw.trim();

        if ( !( /^\d{2}:\d{2}$/ ).test( string ) ) {
          return false;
        }

        input.value = string;
        if ( input.value !== string ) {
          return false;
        }

        const [ hour, minute ] = string.split( ':' );

        return ( hour * 60 ) + +minute;
      };
    } )();

    handleTableKeyDown = async event_ => {
      const { target, keyCode, shiftKey } = event_;

      if ( keyCode === 13 ) {
        event_.preventDefault();

        if ( target.closest( '.entry' ) ) {
          const currentRow = target.closest( '.table-row' );

          if ( shiftKey ) {
            if ( target.dataset.type === 'content' ) {
              focusTarget( currentRow.previousElementSibling?.querySelector( 'div.table-cell.entry > [data-type="id"]' ) );
            }
            else {
              focusTarget( target.parentNode.querySelector( '[data-type="content"]' ) );
            }
          }
          else if ( target.dataset.type === 'content' ) {
            focusTarget( target.parentNode.querySelector( '[data-type="id"]' ) );
          }
          else {
            let nextRow = currentRow.nextElementSibling;

            if ( !nextRow ) {
              await this.createRow();
              nextRow = currentRow.nextElementSibling;
            }

            focusTarget( nextRow?.querySelector( 'div.table-cell.entry > [data-type="content"]' ) );
          }
        }
        else if ( target.closest( '.time' ) ) {
          const currentRow = target.closest( '.table-row' );

          if ( shiftKey ) {
            if ( target.classList.contains( 'time-from' ) ) {
              focusTarget( currentRow.previousElementSibling?.querySelector( 'div.table-cell.time > .time-to' ) );
            }
            else {
              focusTarget( target.parentNode.querySelector( '.time-from' ) );
            }
          }
          else if ( target.classList.contains( 'time-from' ) ) {
            focusTarget( target.parentNode.querySelector( '.time-to' ) );
          }
          else {
            let nextRow = currentRow.nextElementSibling;

            if ( !nextRow ) {
              await this.createRow();
              nextRow = currentRow.nextElementSibling;
            }

            focusTarget( nextRow?.querySelector( 'div.table-cell.time > .time-from' ) );
          }
        }
      }
      else if ( keyCode === 9 && target.classList.contains( 'entry' ) ) {
        const currentRow = target.closest( '.table-row' );

        if ( !currentRow.nextElementSibling ) {
          event_.preventDefault();
          const table = currentRow.parentNode;
          const firstRow = table.children[ 0 ];

          firstRow.querySelector( '.time-from' )?.focus();
        }
      }
    };
  };
} )();

class ButtonGrid extends Component {
  render( { handleClick, handleSave, saveButtonRef, day } ) {
    return (
      <>
        <div class="day-controls" onClick={handleClick}>
          <div class="caret-input caret-back">
            <SvgIconCaretBack />
          </div>
          <div>{day}</div>
          <div class="caret-input caret-forward">
            <SvgIconCaretForward />
          </div>
        </div>
        <button
          type="button"
          class="save-button"
          onClick={handleSave}
          ref={saveButtonRef}
          onAnimationEnd={this.removeAnimation}
        >
          Save
        </button>
      </>
    );
  }

  removeAnimation = ( { target } ) => {
    target?.classList?.remove(
      'save-failed',
      'save-successful'
    );
  };
}

const SvgIconX = () => <svg viewBox="0 0 512 512">
  <path
    stroke="currentColor"
    stroke-linecap="round"
    stroke-width="32"
    d="M368 368L144 144m224 0L144 368"
  />
</svg>;
const SvgIconCaretBack = () => <svg viewBox="0 0 512 512">
  <path
    fill="currentColor"
    d="M321.94 98L158.82 237.78a24 24 0 000 36.44L321.94 414c15.57 13.34 39.62 2.28 39.62-18.22v-279.6c0-20.5-24.05-31.56-39.62-18.18z"
  />
</svg>;
const SvgIconCaretForward = () => <svg viewBox="0 0 512 512">
  <path
    fill="currentColor"
    d="M190.06 414l163.12-139.78a24 24 0 000-36.44L190.06 98c-15.57-13.34-39.62-2.28-39.62 18.22v279.6c0 20.5 24.05 31.56 39.62 18.18z"
  />
</svg>;
const SvgIconAdd = () => <svg viewBox="0 0 512 512">
  <path
    stroke="currentColor"
    stroke-linecap="round"
    stroke-width="32"
    d="M256 112v288m144-144H112"
  />
</svg>;
const Table = ( { content, handleFocus } ) => <div class="table" onFocus={handleFocus}>
  {content?.map( ( { from, to, content, id, fromvalid, tovalid, uuid } ) => <div key={uuid} class="table-row">
    <div class="table-cell time">
      <span
        class={`time-input time-from${
          timeStringIsValid( from ) && fromvalid !== false
            ? ''
            : ' invalid-input'
        }`}
        contentEditable
      >
        {from}
      </span>
      {' - '}
      <span
        class={`time-input time-to${
          timeStringIsValid( to ) && tovalid !== false
            ? ''
            : ' invalid-input'
        }`}
        contentEditable
      >
        {to}
      </span>
    </div>
    <div class="table-cell entry">
      <span contentEditable data-type="content">
        {content}
      </span>
      <hr />
      <span contentEditable data-type="id">
        {id}
      </span>
    </div>
    <div class="table-cell remove-row">
      <SvgIconX />
    </div>
  </div> )}
</div>;
const generateUUIDv4 = a => a
  ? ( a ^ ( ( Math.random() * 16 ) >> ( a / 4 ) ) ).toString( 16 )
  : ( [ 1e7 ] + -1e3 + -4e3 + -8e3 + -1e11 ).replace(
    /[018]/g,
    generateUUIDv4
  );

const FrontPage = ( () => {
  const currentDay = new Date().getDay();
  let currentVals = ( GM_getValue( 'days' )?.[ currentDay - 1 ] ?? [] ).map( item => ( {
    ...item,
    uuid: generateUUIDv4(),
  } ) );

  // - 1 because monday is 0
  // but in javascript dates monday would be 1 with sunday as 0
  const BEFORELESSONS = 'BEFORELESSONS';
  const AFTERLESSONS = 'AFTERLESSONS';
  const DURINGLESSONS = 'DURINGLESSONS';

  return class FrontPage extends Component {
    state = {
      curCourse: 1,
      tableRows: [],
      isHoliday:
        GM_getValue( 'isHoliday' ) ?? ( GM_setValue(
          'isHoliday',
          false
        ), false ),
      isEmpty: false,
      type: undefined,
    };

    timeout = undefined;

    componentDidMount = () => {
      GM_addValueChangeListener(
        'days',
        () => {
          currentVals = GM_getValue( 'days' )?.[ currentDay - 1 ] ?? [];
          this.clearTimeout();
          /* It will set another timeout if necessary
             and if not it would never be cleared so it gets
             cleared here */
          this.updateCourse();
        }
      );
      GM_addValueChangeListener(
        'isHoliday',
        () => {
          this.clearTimeout();
          this.setState( { isHoliday: GM_getValue( 'isHoliday' ) } );
          if ( !GM_getValue( 'isHoliday' ) ) {
            this.updateCourse();
          }
        }
      );

      if ( !this.state.isHoliday ) {
        this.updateCourse();
      }
    };

    clearTimeout = () => {
      clearTimeout( this.timeout );
      this.timeout = undefined;
    };

    setCoursesTimeout = delay => {
      this.clearTimeout();
      this.timeout = setTimeout(
        this.updateCourse.bind( this ),
        delay,
        true
      );
    };

    updateCourse( notify ) {
      if ( currentVals.length === 0 ) {
        this.setState( { isEmpty: true } );
        return;
      }

      const currentDate = new Date();
      const currentTimeInMinutes
        = ( currentDate.getHours() * 60 )
        + currentDate.getMinutes()
        + ( currentDate.getSeconds() / 60 )
        + ( currentDate.getMilliseconds() / 60 / 1000 );

      const totalFrom = currentVals[ 0 ].from;
      const totalTo = currentVals[ currentVals.length - 1 ].to;

      if ( currentTimeInMinutes < totalFrom ) {
        this.setState( {
          type: BEFORELESSONS,
          tableRows: [ undefined, currentVals[ 0 ] ],
        } );

        const nextInMinutesSinceMidnight = currentVals[ 0 ].from;
        const nextMinutes = nextInMinutesSinceMidnight % 60;
        const nextHours = Math.floor( nextInMinutesSinceMidnight / 60 );

        const nextDate = new Date();
        nextDate.setHours(
          nextHours,
          nextMinutes,
          0,
          0
        );

        this.setCoursesTimeout( nextDate - currentDate );
      }
      else if ( currentTimeInMinutes >= totalTo ) {
        this.setState( {
          type: AFTERLESSONS,
        } );
      }
      else {
        let currentIndex = 0;

        while ( currentVals[ currentIndex ].to < currentTimeInMinutes ) {
          ++currentIndex;
        }

        const currentValue = currentVals[ currentIndex ];
        const nextValue = currentVals[ currentIndex + 1 ];

        this.setState( {
          type: DURINGLESSONS,
          tableRows: [ currentValue, nextValue ],
        } );

        if (
          notify
          && !this.state.isHoliday
          && currentValue
          && 'content' in currentValue
        ) {
          GM_notification( {
            text: currentValue.content,
            title: 'Now',
            image: NOTIFICATION_ICON,
            timeout: 4000,
            silent: true,
            onclick: () => {
              open( 'id' in currentValue
                ? `/course/view.php?id=${ currentValue.id }`
                : '/' );
            },
          } );
        }

        const nextInMinutesSinceMidnight = currentVals[ currentIndex ].to;
        const nextHours = Math.floor( nextInMinutesSinceMidnight / 60 );
        const nextMinutes = nextInMinutesSinceMidnight % 60;

        const nextDate = new Date();
        nextDate.setHours(
          nextHours,
          nextMinutes,
          0,
          0
        );

        this.setCoursesTimeout( nextDate - currentDate );
      }
    }

    render(
      _properties, { isEmpty, isHoliday, type, tableRows }
    ) {
      const isWeekend = currentDay === 0 || currentDay === 6;

      return (
        <div>
          <div class="mod-indent-outer">
            <div class="contentwithoutlink">
              <div class="no-overflow">
                <hr />
                <div>
                  <div class="tt-title">Timetable</div>
                  <div class="tt-table">
                    <div class="tt-tbody">
                      {!isWeekend && !isHoliday && type === BEFORELESSONS
                        && <TimetableRow values={{ content: 'No lesson' }} isNow />
                      }
                      {!isWeekend && !isHoliday && type === AFTERLESSONS
                        && <div class="tt-title">No school anymore</div>
                      }
                      {isWeekend && !isHoliday
                        && <div class="tt-title">Weekend</div>
                      }
                      {isHoliday && <div class="tt-title">Holiday</div>}
                      {!isWeekend
                        && !isEmpty
                        && !isHoliday
                        && ( type === BEFORELESSONS || type === DURINGLESSONS )
                        && tableRows?.map( (
                          currentValue, index
                        ) => currentValue
                              && <TimetableRow
                                key={currentValue.uuid}
                                values={currentValue}
                                isNow={index === 0}
                              /> )}
                      {isEmpty && !isWeekend
                        && <>
                          {"Today's timetable is empty, you can update it "}
                          <a
                            href="/timetable/v5"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            here
                          </a>
                        </>
                      }
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
} )();

const TimetableRow = ( { values, isNow } ) => {
  const { from, to, id, content } = values ?? {};
  return (
    typeof values === 'object'
      && <div class="tt-tr">
        <div class="tt-th">
          {isNow
            ? 'Now'
            : 'Next'}
          {from
            && to
            && ` (${ parseTimeToString( from ) } - ${ parseTimeToString( to ) })`}
          :
        </div>
        <div class="tt-td">
          {typeof id === 'string'
            ? <a
              href={`/course/view.php?id=${ id }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content}
            </a>
            : content ?? 'Free lesson'
          }
        </div>
      </div>

  );
};

const parseTimeToString = int => {
  if ( Number.isNaN( int ) ) {
    return false;
  }

  const minutes = +int % 60;
  const hours = Math.floor( +int / 60 );

  return `${ hours.toString().padStart(
    2,
    '0'
  ) }:${ minutes
    .toString()
    .padStart(
      2,
      '0'
    ) }`;
};

const timeStringIsValid = ( () => {
  const input = document.createElement( 'input' );

  input.type = 'time';

  return raw => {
    const string = `${ raw }`.trim();

    if ( !( /^\d{2}:\d{2}$/ ).test( string ) ) {
      return false;
    }

    input.value = string;
    return input.value === string;
  };
} )();

const focusTarget = (
  target, offset
) => {
  if ( target instanceof Element ) {
    const range = new Range();
    const sel = getSelection();
    const start = +( offset ?? +target.textContent.length );

    target.focus();
    range.setStart(
      target.childNodes[ 0 ] ?? target,
      start
    );
    range.collapse( true );
    sel.removeAllRanges();
    sel.addRange( range );
  }
};

const functionToRun = ( /^\/timetable\/v5/iu ).test( location.pathname )
  ? initSettingsPage
  : initFrontpage;

document.readyState === 'complete'
  ? functionToRun()
  : addEventListener(
    'DOMContentLoaded',
    functionToRun,
    { once: true }
  );
