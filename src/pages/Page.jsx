/**
 * @fileOverview Page component
 *
 * @author Franklin Chieze
 *
 * @requires NPM:prop-types
 * @requires NPM:react
 * @requires ../lib/react-flex-proto/Col.jsx
 * @requires ../lib/react-flex-proto/Row.jsx
 */

import PropTypes from 'prop-types';
import React from 'react';

import Col from '../lib/react-flex-proto/Col.jsx';
import Row from '../lib/react-flex-proto/Row.jsx';

/**
* Page component
* @class Page
*/
class Page extends React.Component {
  /**
   * @constructor
   *
   * @param { object } props the component's props object
  */
  constructor(props) {
    super(props);

    this.renderTitle = this.renderTitle.bind(this);
    this.renderActionBar = this.renderActionBar.bind(this);
  }

  /**
   * @method renderTitle
   *
   * @returns { node } JSX
   */
  renderTitle() {
    if (!this.props.title) {
      return null;
    }

    return (
      <Col padding={0}>
        <h1 className="al-title">{this.props.title}</h1>
      </Col>
    );
  }

  /**
   * @method renderActionBar
   *
   * @returns { node } JSX
   */
  renderActionBar() {
    if (!this.props.actionBar) {
      return null;
    }

    return (
      <Col align="right">
        {this.props.actionBar}
      </Col>
    );
  }

  /**
   * @method render
   *
   * @returns { node } JSX
   */
  render() {
    return (
      <div>
        <div className="content-top clearfix">
          <Row align="left">
            {this.renderTitle()}
            {this.renderActionBar()}
          </Row>
        </div>
        {this.props.children}
      </div>
    );
  }
}

Page.defaultProps = {
  actionBar: <div />,
  children: <div />,
  title: ''
};

Page.propTypes = {
  actionBar: PropTypes.node,
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Page;
