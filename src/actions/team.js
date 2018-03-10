import actionTypes from './actionTypes';

export function addTeam(name) {
  return {
    type: actionTypes.CREATE_TEAM,
    payload: {
      name
    }
  }
}