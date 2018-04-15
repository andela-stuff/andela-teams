/**
 * @fileOverview NotificationsAlert component
 *
 * @author Franklin Chieze
 *
 * @requires NPM:prop-types
 * @requires NPM:react
 */

import PropTypes from 'prop-types';
import React from 'react';

/**
* NotificationsAlert component
* @class NotificationsAlert
*/
class NotificationsAlert extends React.Component {
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
          <a className="dropdown-toggle" onClick={this.onClick}>
            <i className="fa fa-bell-o" />
            <span>{this.props.notificationCount}</span>
            <div className="notification-ring" />
          </a>
          <div className="top-dropdown-menu dropdown-menu">
            <i className="dropdown-arr" />
            <div className="header clearfix">
              <strong className="red-text">Notifications</strong>
              {this.props.markAllAsReadOnClick ? <a onClick={this.props.markAllAsReadOnClick}>Mark All as Read</a> : ''}
              {this.props.settingsOnClick ? <a onClick={this.props.settingsOnClick}>Settings</a> : ''}
            </div>
            <div className="msg-list">
              {this.props.children}
            </div>
            {this.props.allNotificationsOnClick ? <a onClick={this.props.allNotificationsOnClick}>See all notifications</a> : ''}
          </div>
        </li>
      </ul>
    );
  }
}

NotificationsAlert.defaultProps = {
  allNotificationsOnClick: () => {},
  children: <div />,
  markAllAsReadOnClick: () => {},
  notificationCount: () => {},
  settingsOnClick: () => {}
};

NotificationsAlert.propTypes = {
  allNotificationsOnClick: PropTypes.func,
  children: PropTypes.node,
  markAllAsReadOnClick: PropTypes.func,
  notificationCount: PropTypes.func,
  settingsOnClick: PropTypes.func,
};

export default NotificationsAlert;
