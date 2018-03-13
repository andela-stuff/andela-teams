import React from 'react';

import Team from './Team.jsx';

export default function TeamList(props) {
  const { teams } = props;

  return (
    <div>
      <input type='text' placeholder='Add todo' />
      <ul>
        {teams.map(t => (
          <li key={t.id}>
            <Team team={t} />
          </li>
        ))}
      </ul>
    </div>
  );
}
