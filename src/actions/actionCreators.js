/**
 * @fileOverview Action creators
 *
 * @author Franklin Chieze
 *
 * @requires ./actionTypes
 */

import actionTypes from './actionTypes';

/**
 * @method addTeam
 * @desc Action to create new team
 *
 * @param { object} name the name of the team
 *
 * @returns { function } function
 */
export function addTeam(name) {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.CREATE_TEAM,
      payload: {
        name
      }
    });
  };
}
