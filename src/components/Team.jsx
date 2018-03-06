import React from 'react';

export default function Team(props) {
  const { team } = props;

  return <span>{ team.name } ({ team.id })</span>;
}
