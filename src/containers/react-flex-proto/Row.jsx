/**
 * @fileOverview Row component
 *
 * @author Franklin Chieze
 *
 * @requires NPM:prop-types
 * @requires NPM:react
 * @requires ./styles/flex.css
 */

import PropTypes from 'prop-types';
import React from 'react';

// eslint-disable-next-line no-unused-vars
import css from './styles/flex.css';

const Row = props => (
  <div className={props.align === 'left' ? 'flexbox' : 'flexbox-right'}>
    {props.children}
  </div>
);

Row.defaultProps = {
  align: 'left',
  children: <div />
};

Row.propTypes = {
  align: PropTypes.string,
  children: PropTypes.node
};

export default Row;
