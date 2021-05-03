import { render, Component, h, createRef } from 'preact';

import frontPageCss from './get-credentials.scss';

import type { Component as ComponentInterface } from 'preact/src/index.d';

type Credentials = {
  username: string;
  password: string;
};

type LoginState =
  | {
    loggedOut: true;
    loggedOutCallback: ( argument0: Credentials ) => void;
  }
  | {
    loggedOut: false;
    loggedOutCallback: undefined;
  };

let frontPageLoginSetState: ComponentInterface['setState'];
let frontPageDefaultLoginState: LoginState;

class FrontPageLogin extends Component {
  state = frontPageDefaultLoginState;

  inputs = {
    username: createRef<HTMLInputElement>(),
    password: createRef<HTMLInputElement>(),
  };

  render = (
      _properties: Record<string, unknown>, { loggedOut }: LoginState,
  ) => loggedOut &&
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
            class="btn btn-primary"
            type="button"
            onClick={this.handleClick}
          >
            Login
          </button>
        </div>
      </div>
  ;

  handleClick = () => {
    const username = this.inputs.username.current?.value.trim();
    const password = this.inputs.password.current?.value;

    if ( username && password && this.state?.loggedOutCallback ) {
      this.state.loggedOutCallback( {
        username,
        password,
      } );
    }
  };

  componentDidMount = () => {
    frontPageLoginSetState = this.setState.bind( this );
  };
}

export const defaultLoginReturnState = ( state: LoginState ): void => {
  if ( typeof frontPageLoginSetState === 'function' ) {
    frontPageLoginSetState( state );
  }
  else {
    frontPageDefaultLoginState = state;
    const div = document.createElement( 'div' );
    div.className = 'shared-login-popup';
    document.body.append( div );
    GM_addStyle( ( frontPageCss as unknown ) as string );
    render(
        <FrontPageLogin />,
        div,
    );
  }
};

export const getCredentials = async ( loginReturnState = defaultLoginReturnState ): Promise<Credentials> => new Promise( ( resolve ) => {
  const callback = ( { username, password }: Credentials ) => {
    if ( username && password ) {
      /* Username and password both cant be empty strings (seems obvious)
       so don't even try logging if either is */

      GM_setValue(
          'username',
          username,
      );
      GM_setValue(
          'password',
          password,
      );

      loginReturnState( { loggedOut: false, loggedOutCallback: undefined } );

      resolve( { username, password } );
    }
  };

  const username = GM_getValue<string | undefined>( 'username' );
  const password = GM_getValue<string | undefined>( 'password' );
  if ( username && password ) {
    resolve( { username, password } as Credentials );
  }
  else {
    loginReturnState( {
      loggedOut: true,
      loggedOutCallback: callback,
    } as LoginState );
  }
} );
