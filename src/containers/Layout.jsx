/**
 * @fileOverview Layout component
 *
 * @author Franklin Chieze
 *
 * @requires NPM:lodash
 * @requires NPM:prop-types
 * @requires NPM:react
 * @requires ../components/PageTop.jsx
 * @requires ../components/Sidebar.jsx
 *
 * https://github.com/knledg/react-webpack-skeleton/blob/cdb8ca91ddfbeca0c69a5a8b0294bfe5a04db2d9/src/layout/app.js
 */

import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Footer from '../components/Footer.jsx';
import PageTop from '../components/PageTop.jsx';
import Sidebar from '../components/Sidebar.jsx';
// import eventBus from '../lib/EventBus';
import Teams from '../pages/Teams.jsx';

/**
* Layout component
* @class Layout
*/
class Layout extends React.Component {
  /**
   * @constructor
   *
   * @param { object } props the component's props object
  */
  constructor(props) {
    super(props);

    this.state = {
      idToken: null, // Token indicating user is logged in
      user: null, // Full user for that logged in user, if exists
    };
  }

  /**
   * @method componentWillMount
   *
   * @returns { unknown } unknown
   */
  componentWillMount() {
    this.setState({ idToken: this.getIdToken() });
  }

  /**
   * @method componentDidMount
   *
   * @returns { unknown } unknown
   */
  componentDidMount() {
    if (!this.state.idToken) {
      return this.redirectToLogin();
    }
    return this.setUser();
  }

  /**
   * @method onLogout
   *
   * @returns { unknown } unknown
   */
  onLogout() {
    localStorage.removeItem('userToken');
    this.setState({ idToken: null, user: null });
    return this.redirectToLogin();
  }

  /**
   * @method setUser
   *
   * @returns { unknown } unknown
   */
  setUser() {
    if (!this.state.idToken) {
      return null;
    }

    // TODO: get user using idToken
    const user = {};
    return this.setState({ user });
  }

  /**
   * @method getIdToken
   *
   * @returns { unknown } unknown
   */
  getIdToken() {
    const idToken = localStorage.getItem('userToken');
    if (!idToken) {
      return this.onLogout();
    }
    return idToken;
  }

  /**
   * @method redirectToLogin
   *
   * @returns { unknown } unknown
   */
  redirectToLogin() {
    // console.log(this.props.router);
    this.props.router.history.push({
      pathname: '/login',
      query: { redirectUri: encodeURIComponent(this.props.location.pathname) },
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
      <div>
        <main className="">
          <Sidebar {...this.props} />
          <PageTop location={this.props.location} user={this.state.user} />

          <div className="al-main">
            <div className="al-content">
              <Switch>
                <Route
                  path="/teams"
                  render={
                    props => (React.cloneElement(<Teams />, { ...props, ...this.props }))
                  }
                />
                <Route
                  path="/pr"
                  render={
                    props => (React.cloneElement(<Teams />, { ...props, ...this.props }))
                  }
                />
                <Route
                  path="*"
                  render={
                    props => (React.cloneElement(<Teams />, { ...props, ...this.props }))
                  }
                />
              </Switch>
            </div>
          </div>

          <Footer />
          <back-top />
        </main>
      </div>
    );
  }
}

Layout.defaultProps = {
  location: { pathname: '/', query: {} },
  router: { pathname: '/', query: {} }
};

Layout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    query: PropTypes.object.isRequired,
  }),
  router: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    history: PropTypes.object,
    query: PropTypes.object.isRequired,
  })
};

export default Layout;
