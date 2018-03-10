import { List, Map } from 'immutable';

import actionTypes from '../actions/actionTypes';

export default function(teams = List([]), action) {
  switch (action.type) {
    case actionTypes.CREATE_TEAM:
      teams.push(Map(action.payload));
    default: return teams;
  }
}