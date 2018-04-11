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

import Footer from '../components/Footer.jsx';
import PageTop from '../components/PageTop.jsx';
import Sidebar from '../components/Sidebar.jsx';
// import eventBus from '../lib/EventBus';

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
   * @method create
   * @desc This method creates a new team
   *
   * @param { object} req request
   * @param { object} res response
   *
   * @returns { object } response
   */
  componentWillMount() {
    this.setState({ idToken: this.getIdToken() });
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
              {
                /* React.cloneElement(
                  this.props.children,
                  _.assign({}, this.props, { user: this.state.user })
                ) */
              }
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
    query: PropTypes.object.isRequired,
  })
};

export default Layout;
