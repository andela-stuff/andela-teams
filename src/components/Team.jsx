/**
 * @fileOverview Team component
 *
 * @author Franklin Chieze
 *
 * @requires NPM:prop-types
 * @requires NPM:react
 */

import PropTypes from 'prop-types';
import React from 'react';

const Team = (props) => {
  const { team } = props;

  return <span>{ team.name } ({ team.description })</span>;
};

Team.propTypes = {
  team: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired
};

export default Team;
