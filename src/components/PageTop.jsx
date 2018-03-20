/* eslint no-unused-vars: 0 */

/**
 * @fileOverview PageTop component
 *
 * @author Franklin Chieze
 *
 * @requires NPM:lodash
 * @requires NPM:moment
 * @requires NPM:prop-types
 * @requires NPM:react
 * @requires NPM:react-router-dom
 * @requires ../assets/img/person.svg
 * @requires ../containers/react-flex-proto/Col.jsx
 * @requires ../containers/react-flex-proto/Row.jsx
 * @requires ../lib/EventBus
 * @requires ./SearchBar.jsx
 */

import _, { noop } from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import Person from '../assets/img/person.svg';

import Col from '../containers/react-flex-proto/Col.jsx';
import Row from '../containers/react-flex-proto/Row.jsx';
// import eventBus from '../lib/EventBus';
import MessagesAlert from './react-blur-admin/MessageAlert.jsx';
import MessagesAlertContainer from './react-blur-admin/MessagesAlertContainer.jsx';
import NotificationAlert from './react-blur-admin/NotificationAlert.jsx';
import NotificationsAlert from './react-blur-admin/NotificationsAlert.jsx';
import SearchBar from './SearchBar.jsx';

/**
* PageTop component
* @class PageTop
*/
class PageTop extends React.Component {
  /**
   * @constructor
   *
   * @param { object } props the component's props object
  */
  constructor(props) {
    super(props);

    this.state = {
      appName: 'Andela Teams',
      isMenuOpen: false,
      notifications: [{
        user: {
          name: 'Ashley',
          picture: Person,
        },
        subject: 'This is a notification alert',
        timeStamp: '02/13/95 9:00',
        relativeTime: moment('02/13/95', 'MM/DD/YY').fromNow(),
      },
      {
        user: {
          name: 'Nick',
          picture: Person,
        },
        subject: 'This is a notification alert',
        timeStamp: '07/13/16 12:00',
        relativeTime: moment('07/13/16 12:00', 'MM/DD/YY hh:mm').fromNow(),
      },
      {
        user: {
          name: 'Matt',
          picture: Person,
        },
        subject: 'This is a notification alert',
        timeStamp: '04/20/15 9:00',
        relativeTime: moment('04/20/15 9:00', 'MM/DD/YY hh:mm').fromNow(),
      },
      {
        user: {
          name: 'Jon',
          picture: Person,
        },
        subject: 'This is a notification alert',
        timeStamp: '07/19/16 8:00',
        relativeTime: moment('07/19/16 8:00', 'MM/DD/YY hh:mm').fromNow(),
      },
      {
        user: {
          name: 'Jacob',
          picture: Person,
        },
        subject: 'This is a notification alert',
        timeStamp: '05/23/16 2:00',
        relativeTime: moment('05/23/16 2:00', 'MM/DD/YY hh:mm').fromNow(),
      },
      {
        user: {
          name: 'Jason',
          picture: Person,
        },
        subject: 'This is a notification alert',
        timeStamp: '05/01/16 4:00',
        relativeTime: moment('05/01/16 4:00', 'MM/DD/YY hh:mm').fromNow(),
      }],
      messages: [{
        user: {
          name: 'Ashley',
          picture: Person,
        },
        subject: 'This is a message alert',
        timeStamp: '02/13/95 9:00',
        relativeTime: moment('02/13/16', 'MM/DD/YY').fromNow(),
      },
      {
        user: {
          name: 'Nick',
          picture: Person,
        },
        subject: 'This is a message alert',
        timeStamp: '07/13/16 12:00',
        relativeTime: moment('07/13/16 12:00', 'MM/DD/YY hh:mm').fromNow(),
      }],
    };

    this.onLogout = this.onLogout.bind(this);
    this.onToggleMenu = this.onToggleMenu.bind(this);
    this.renderLogo = this.renderLogo.bind(this);
    this.renderHamburgerMenu = this.renderHamburgerMenu.bind(this);
    this.renderSearch = this.renderSearch.bind(this);
    this.renderMessages = this.renderMessages.bind(this);
    this.renderNotifications = this.renderNotifications.bind(this);
    this.renderUserSection = this.renderUserSection.bind(this);
  }

  /**
   * @method componentWillMount
   *
   * @returns { node } JSX
   */
  componentWillMount() {
  }

  /**
   * @method onLogout
   *
   * @returns { undefined } undefined
   */
  onLogout() {
    // eventBus.emit('logout');
  }

  /**
   * @method onToggleMenu
   *
   * @returns { undefined } undefined
   */
  onToggleMenu() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  /**
   * @method renderLogo
   *
   * @returns { node } JSX
   */
  renderLogo() {
    return (
      <Link to={{ pathname: '/' }} className="al-logo clearfix">{this.state.appName}</Link>
    );
  }

  /**
   * @method renderHamburgerMenu
   *
   * @returns { node } JSX
   */
  renderHamburgerMenu() {
    return null;

    // @todo
    // return (
    //   <a href
    //     className="collapse-menu-link ion-navicon"
    //     ng-click="isMenuCollapsed=!isMenuCollapsed">
    //   </a>
    // );
  }

  /**
   * @method renderSearch
   *
   * @returns { node } JSX
   */
  renderSearch() {
    return (
      <div className="search">
        <SearchBar />
      </div>
    );
  }

  /**
   * @method renderMessages
   *
   * @returns { node } JSX
   */
  renderMessages() {
    const message = _.assign({}, this.state.messages);
    return _.map(message, (messages, index) =>
      <MessagesAlert {...messages} key={index} />);
  }

  /**
   * @method renderNotifications
   *
   * @returns { node } JSX
   */
  renderNotifications() {
    const notifications = _.assign({}, this.state.notifications);
    return _.map(notifications, (notification, index) =>
      <NotificationAlert {...notification} key={index} />);
  }

  /**
   * @method renderUserSection
   *
   * @returns { node } JSX
   */
  renderUserSection() {
    return (
      <div className="user-profile clearfix">
        <div className={`al-user-profile dropdown ${this.state.isMenuOpen ? 'open' : ''}`}>
          <a className="profile-toggle-link dropdown-toggle" onClick={this.onToggleMenu}>
            <img src={this.props.user && this.props.user.picture ? this.props.user.picture : Person} alt="" />
          </a>
          <ul className="top-dropdown-menu profile-dropdown dropdown-menu">
            <li><i className="dropdown-arr" /></li>
            <li><Link to="/"><i className="fa fa-user" />Profile</Link></li>
            <li><Link to="/'"><i className="fa fa-cog" />Settings</Link></li>
            <li>
              <a href={this.props.location.pathname} className="signout" onClick={e => this.onLogout()}>
                <i className="fa fa-power-off" />Sign out
              </a>
            </li>
          </ul>
        </div>
        <Row>
          <Col padding="5px 2px">
            <MessagesAlertContainer
              mailCount={this.state.messages.length}
              markAllAsReadOnClick={noop}
              allMessagesOnClick={noop}
              settingsOnClick={noop}
            >
              {this.renderMessages()}
            </MessagesAlertContainer>
            <NotificationsAlert
              notificationCount={this.state.notifications.length}
              markAllAsReadOnClick={noop}
              allNotificationsOnClick={noop}
              settingsOnClick={noop}
            >
              {this.renderNotifications()}
            </NotificationsAlert>
          </Col>
        </Row>
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
      <div className="page-top clearfix" scroll-position="scrolled" max-height="50">
        {this.renderLogo()}
        {this.renderHamburgerMenu()}
        {this.renderSearch()}
        {this.renderUserSection()}
      </div>
    );
  }
}

PageTop.defaultProps = {
  location: { pathname: '/', query: {} },
  user: { name: 'user', picture: 'picture' }
};

PageTop.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    query: PropTypes.object.isRequired,
  }),
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  })
};

export default PageTop;
