/**
 * @fileOverview Application's client entry point
 *
 * @author Franklin Chieze
 *
 * @requires NPM:react
 * @requires NPM:react-dom
 * @requires NPM:react-redux
 * @requires NPM:react-router-dom
 * @requires ./assets/styles/app.scss
 * @requires ./containers/App.jsx
 * @requires ./store
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Initializing touch events
import injectTapEventPlugin from 'react-tap-event-plugin';

import './assets/styles/app.scss';
import './lib/react-flex-proto/styles/flex.css';
import App from './containers/App.jsx';
import Login from './pages/Login.jsx';
import store from './store';

injectTapEventPlugin();

/**
 * @method init
 *
 * @returns { unknown } unknown
 */
function init() {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route component={App} />
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.getElementById('app')
  );
}

document.addEventListener('DOMContentLoaded', () => {
  try {
    window.localStorage.test = 'You appear to be unable to write to localStorage';
  } catch (e) {
    document.body.innerHTML = `
    <div class="mobile-incompatibility">
    <h4>Your browser is not able to write to local storage.</h4>
    <p>If you are using private mode please disable it.</p>
    <p>Otherwise your browser is not supported or you have local storage turned off in your browser preferences.</p>
    </div>
    `;
  }
  init();
});
