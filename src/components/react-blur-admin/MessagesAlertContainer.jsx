/**
 * @fileOverview MessagesAlertContainer component
 *
 * @author Franklin Chieze
 *
 * @requires NPM:prop-types
 * @requires NPM:react
 */

import PropTypes from 'prop-types';
import React from 'react';

/**
* MessagesAlertContainer component
* @class MessagesAlertContainer
*/
class MessagesAlertContainer extends React.Component {
  /**
   * @constructor
   *
   * @param { object } props the component's props object
  */
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
    };

    this.onClick = this.onClick.bind(this);
  }

  /**
   * @method onClick
   *
   * @returns { undefined } undefined
   */
  onClick() {
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  }

  /**
   * @method render
   * @desc render method
   *
   * @returns { node } JSX
   */
  render() {
    return (
      <ul className="al-msg-center clearfix">
        <li className={`dropdown ${this.state.isExpanded ? 'open' : ''}`}>
          <a className="msg dropdown-toggle" onClick={this.onClick}>
            <i className="fa fa-envelope-o" />
            <span>{this.props.mailCount}</span>
            <div className="notification-ring" />
          </a>
          <div className="top-dropdown-menu dropdown-menu">
            <i className="dropdown-arr" />
            <div className="header clearfix">
              <strong className="red-text">Messages</strong>
              {this.props.markAllAsReadOnClick ? <a onClick={this.props.markAllAsReadOnClick}>Mark All as Read</a> : ''}
              {this.props.settingsOnClick ? <a onClick={this.props.settingsOnClick}>Settings</a> : ''}
            </div>
            <div className="msg-list">
              {this.props.children}
            </div>
            {this.props.allMessagesOnClick ? <a onClick={this.props.allMessagesOnClick}>See all messages</a> : ''}
          </div>
        </li>
      </ul>
    );
  }
}

MessagesAlertContainer.defaultProps = {
  allMessagesOnClick: () => {},
  children: <div />,
  markAllAsReadOnClick: () => {},
  settingsOnClick: () => {}
};

MessagesAlertContainer.propTypes = {
  allMessagesOnClick: PropTypes.func,
  children: PropTypes.node,
  mailCount: PropTypes.number.isRequired,
  markAllAsReadOnClick: PropTypes.func,
  settingsOnClick: PropTypes.func,
};

export default MessagesAlertContainer;
