/**
 * @fileOverview Application's client entry point
 *
 * @author Franklin Chieze
 *
 * @requires NPM:immutable
 * @requires ../actions/actionTypes
 */

// import { List, Map } from 'immutable';

import actionTypes from '../actions/actionTypes';

/**
 * @param { object} state current state of the store
 * @param { object} action current action being handled
 *
 * @returns { object } the new state of the store
 */
export default (state = {}, action) => {
  let newState = { ...state };

  switch (action.type) {
    case actionTypes.CREATE_TEAM:
      newState = { ...action.payload };
      break;
    default:
  }

  return newState;
};
