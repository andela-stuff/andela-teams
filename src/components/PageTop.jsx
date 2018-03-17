import _, { noop } from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import Person from '../assets/img/person.svg';

import Col from '../containers/react-flex-proto/Col.jsx';
import Row from '../containers/react-flex-proto/Row.jsx';
import SearchBar from './SearchBar.jsx';

class PageTop extends React.Component {

    constructor(props){
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
    }

    componentWillMount() {

    }

    onLogout() {
        //eventBus.emit('logout');***********************************
    }
  
    onToggleMenu() {
      this.setState({ isMenuOpen: ! this.state.isMenuOpen });
    }

    renderLogo() {
        return (
          <Link to={{ pathname: '/' }} className="al-logo clearfix">{this.state.appName}</Link>
        );
    }

    render() {
        return (
            <div className="page-top clearfix" scroll-position="scrolled" max-height="50">
              {this.renderLogo()}
            </div>
          );
    }
}

PageTop.propTypes = {
    user: PropTypes.object,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      query: PropTypes.object.isRequired,
    }),
};

export default PageTop;
