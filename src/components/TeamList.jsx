/**
 * @fileOverview TeamList component
 *
 * @author Franklin Chieze
 *
 * @requires NPM:prop-types
 * @requires NPM:react
 * @requires ./Team.jsx
 */

import PropTypes from 'prop-types';
import React from 'react';

import Team from './Team.jsx';

const TeamList = (props) => {
  const { teams } = props;

  return (
    <div>
      <input type="text" placeholder="Add todo" />
      <ul>
        {teams.map(t => (
          <li key={t.id}>
            <Team team={t} />
          </li>
        ))}
      </ul>
    </div>
  );
};

TeamList.defaultProps = {
  teams: []
};

TeamList.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object)
};

export default TeamList;
