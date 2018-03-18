/**
 * @fileOverview Sidebar component
 *
 * @author Franklin Chieze
 *
 * @requires NPM:lodash
 * @requires NPM:prop-types
 * @requires NPM:react
 * @requires NPM:react-router-dom
 */

import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

/**
* Sidebar component
* @class Sidebar
*/
class Sidebar extends React.Component {
  /**
   * @constructor
   *
   * @param { object } props the component's props object
  */
  constructor(props) {
    super(props);

    this.state = {
      navItems: [
        { pathname: '/', label: 'Home', icon: 'home' },
        { pathname: '/about', label: 'About', icon: 'info' },
        { pathname: '/table-demo', label: 'Tables', icon: 'table' },
        { pathname: '/button-demo', label: 'Buttons', icon: 'dot-circle-o' },
        { pathname: '/progress-bars', label: 'Progress Bars', icon: 'spinner' },
        { pathname: '/modal-demo', label: 'Modals', icon: 'clipboard' },
        { pathname: '/tabs-demo', label: 'Tabs', icon: 'list-ul' },
        { pathname: '/input-demo', label: 'Inputs', icon: 'check-square' },
        { pathname: '/notifications-demo', label: 'Notifications', icon: 'exclamation' },
      ],
    };

    this.isSelected = this.isSelected.bind(this);
    this.renderLinks = this.renderLinks.bind(this);
  }

  /**
   * @method isSelected
   * @desc determines if a nav item is selected
   *
   * @param { object} navItem nav item
   *
   * @returns { bool } a boolean value showing if the nav item is selected
   */
  isSelected(navItem) {
    return this.props.location.pathname === navItem.pathname ? 'selected' : '';
  }

  /**
   * @method renderLinks
   * @desc displays links on the sidebar
   *
   * @returns { node } JSX
   */
  renderLinks() {
    return _.map(this.state.navItems, navItem => (
      <li className={`al-sidebar-list-item ${this.isSelected(navItem)}`} key={navItem.pathname}>
        <Link className="al-sidebar-list-link" to={{ pathname: navItem.pathname, query: navItem.query }}>
          <i className={`fa fa-${navItem.icon}`} />
          <span>{navItem.label}</span>
        </Link>
      </li>
    ));
  }

  /**
   * @method render
   * @desc render method
   *
   * @returns { node } JSX
   */
  render() {
    return (
      <aside
        className="al-sidebar"
        ng-swipe-right="menuExpand()"
        ng-swipe-left="menuCollapse()"
        ng-mouseleave="hoverElemTop=selectElemTop"
      >
        <ul className="al-sidebar-list">
          {this.renderLinks()}
        </ul>
      </aside>
    );
  }
}

Sidebar.defaultProps = {
  location: { pathname: '/', query: {} }
};

Sidebar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    query: PropTypes.object.isRequired,
  }),
};

export default Sidebar;
