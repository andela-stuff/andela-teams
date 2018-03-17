import PropTypes from 'prop-types';
import React from 'react';

import css from './styles/flex.css';

class Row extends React.Component {

  getDefaultProps() {
    return {
      align : 'left',
    };
  };

  render() {
    return (
      <div className={this.props.align === 'left' ? 'flexbox' : 'flexbox-right'}>
        {this.props.children}
      </div>
    );
  }
}

Row.propTypes = {
  align: PropTypes.string
};

export default Row;
