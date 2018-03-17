import actionTypes from './actionTypes';

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
