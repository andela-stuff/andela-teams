/**
 * @fileOverview MessageAlert component
 *
 * @author Franklin Chieze
 *
 * @requires NPM:prop-types
 * @requires NPM:react
 */

import PropTypes from 'prop-types';
import React from 'react';

/**
* MessageAlert component
* @class MessageAlert
*/
class MessageAlert extends React.Component {
  /**
   * @constructor
  */
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
    this.renderBody = this.renderBody.bind(this);
  }

  /**
   * @method onClick
   *
   * @returns { undefined } undefined
   */
  onClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  /**
   * @method renderBody
   *
   * @returns { node } JSX
   */
  renderBody() {
    return (
      <div onClick={this.onClick} className="clearfix">
        <div className="img-area">
          <img src={this.props.user.picture} className="photo-msg-item" alt="" />
        </div>
        <div className="msg-area">
          <div>{this.props.subject}</div>
          <span title={this.props.timestamp}>{this.props.relativeTime}</span>
        </div>
      </div>
    );
  }

  /**
   * @method render
   * @desc render method
   *
   * @returns { node } JSX
   */
  render() {
    return (
      <div>
        {this.renderBody()}
      </div>
    );
  }
}

MessageAlert.defaultProps = {
  onClick: () => {},
  relativeTime: '',
  subject: '',
  timestamp: '',
  user: { name: 'user', picture: 'picture' }
};

MessageAlert.propTypes = {
  onClick: PropTypes.func,
  relativeTime: PropTypes.string,
  subject: PropTypes.string,
  timestamp: PropTypes.string,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  })
};

export default MessageAlert;
