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
import { BrowserRouter } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
import css from './assets/styles/app.scss';
import App from './containers/App.jsx';
import store from './store';

/**
 * @method init
 *
 * @returns { unknown } unknown
 */
function init() {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
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
