/**
 * @fileOverview Application's Redux store
 *
 * @author Franklin Chieze
 *
 * @requires NPM:redux
 * @requires ./reducers
 */

import { createStore } from 'redux';

import reducers from './reducers';

const store = createStore(reducers, {});

export default store;
