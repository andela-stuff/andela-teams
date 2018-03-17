import { combineReducers } from 'redux';

import TeamReducer from './team';

const reducers = combineReducers({
  team: TeamReducer
});

export default reducers;
