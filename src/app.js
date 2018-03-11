import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import TeamList from './components/TeamList.jsx';

const dummyTeams = [
  { id: 0, name: 'make components' },
  { id: 1, name: 'design actions' },
  { id: 2, name: 'implement reducer' },
  { id: 3, name: 'connect components' }
];

ReactDOM.render(
  <TeamList teams={dummyTeams} />,
  document.getElementById('app')
);
