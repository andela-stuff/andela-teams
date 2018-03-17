import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

import css from './assets/styles/app.scss';
import TeamList from './components/TeamList.jsx';
import Page from './containers/Page.jsx';

/*const dummyTeams = [
  { id: 0, name: 'make components' },
  { id: 1, name: 'design actions' },
  { id: 2, name: 'implement reducer' },
  { id: 3, name: 'connect components' }
];

ReactDOM.render(
  <TeamList teams={dummyTeams} />,
  document.getElementById('app')
);*/
ReactDOM.render(
  <Page title="Andela Teams" />,
  document.getElementById('app')
);
