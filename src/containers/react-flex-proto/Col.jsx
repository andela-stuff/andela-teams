/**
 * @fileOverview Col component
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

const Col = (props) => {
  const styles = {
    flex: (props.grow ? '1 ' : '0 ') + (props.shrink ? '1 ' : '0 ') + props.basis,
    textAlign: props.align,
    padding: props.padding,
  };

  return (
    <div cstyle={styles}>
      {props.children}
    </div>
  );
};

Col.defaultProps = {
  align: 'left',
  basis: 'auto', // also accepts '100px', '10%', etc.
  children: <div />,
  grow: true,
  padding: 10,
  shrink: true
};

Col.propTypes = {
  align: PropTypes.string,
  basis: PropTypes.string,
  children: PropTypes.node,
  grow: PropTypes.bool,
  padding: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  shrink: PropTypes.bool
};

export default Col;
