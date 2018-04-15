/**
 * @fileOverview Layout component
 *
 * @author Franklin Chieze
 *
 * @requires NPM:prop-types
 * @requires NPM:react
 * @requires NPM:react-router-dom
 *
 * https://github.com/knledg/react-webpack-skeleton/blob/HEAD/src/layout/login.js
 */

import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';

/**
* Login component
* @class Login
*/
class Login extends React.Component {
  /**
   * @constructor
   *
   * @param { object } props the component's props object
  */
  constructor(props) {
    super(props);

    this.state = {
      idToken: null, // Token indicating user is logged in
    };
  }

  /**
   * @method componentWillMount
   *
   * @returns { unknown } unknown
   */
  componentWillMount() {
    this.setIdToken();
  }

  /**
   * @method setIdToken
   *
   * @returns { unknown } unknown
   */
  setIdToken() {
    const idToken = this.getIdToken();
    if (idToken) {
      this.setState({ idToken });

      if (this.props.location.query && this.props.location.query.redirectUri) {
        this.props.router
          .replace(decodeURIComponent(this.props.location.query.redirectUri));
      } else {
        this.props.router.replace('/');
      }
    }
  }

  /**
   * @method getIdToken
   *
   * @returns { unknown } unknown
   */
  getIdToken() {
    const idToken = localStorage.getItem('userToken');

    return idToken;
  }

  /**
   * @method render
   * @desc render method
   *
   * @returns { node } JSX
   */
  render() {
    if (this.state.idToken) {
      return null;
    }

    return <main className="auth-main">Login Page</main>;
  }
}

Login.defaultProps = {
  location: { pathname: '/', query: {} },
  router: {
    pathname: '/',
    query: {},
  }
};

Login.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    query: PropTypes.object.isRequired,
  }),
  router: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    push: PropTypes.func,
    query: PropTypes.object.isRequired,
    replace: PropTypes.func,
  })
};

export default withRouter(Login);
