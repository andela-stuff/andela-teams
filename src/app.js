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

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
