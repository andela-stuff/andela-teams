import PropTypes from 'prop-types';
import React from 'react';

import css from './styles/flex.css';

class Col extends React.Component {

  getDefaultProps() {
    return {
      grow : true,
      shrink : true,
      basis : 'auto', // also accepts '100px', '10%', etc.
      align : 'left',
      padding : 10,
    };
  };

  render() {
    const styles = {
      flex : (this.props.grow ? '1 ' : '0 ') + (this.props.shrink ? '1 ' : '0 ') + this.props.basis,
      textAlign : this.props.align,
      padding : this.props.padding,
    };

    return (
      <div cstyle={styles}>
        {this.props.children}
      </div>
    );
  }
}

Col.propTypes = {
  grow : PropTypes.bool.isRequired,
  shrink : PropTypes.bool.isRequired,
  basis : PropTypes.string.isRequired,
  padding : PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  align : PropTypes.string.isRequired
};

export default Col;
