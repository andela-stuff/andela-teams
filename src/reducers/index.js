/**
 * @fileOverview The application's combined reducers
 *
 * @author Franklin Chieze
 *
 * @requires NPM:redux
 * @requires ./team
 */

import { combineReducers } from 'redux';

import TeamReducer from './team';

const reducers = combineReducers({
  team: TeamReducer
});

export default reducers;
