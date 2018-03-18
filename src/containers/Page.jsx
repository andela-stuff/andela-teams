/**
 * @fileOverview Page component
 *
 * @author Franklin Chieze
 *
 * @requires NPM:prop-types
 * @requires NPM:react
 * @requires ./react-flex-proto/Col.jsx
 * @requires ./react-flex-proto/Row.jsx
 */

import PropTypes from 'prop-types';
import React from 'react';

import Col from './react-flex-proto/Col.jsx';
import Row from './react-flex-proto/Row.jsx';

/**
* Page component
* @class Page
*/
class Page extends React.Component {

  constructor(props){
    super(props);

    this.renderTitle = this.renderTitle.bind(this);
    this.renderActionBar = this.renderActionBar.bind(this);
  }

  renderTitle() {
    if (!this.props.title) {
      return null;
    }

    return (
      <Col padding={0}>
        <h1 className='al-title'>{this.props.title}</h1>
      </Col>
    );
  }

  renderActionBar() {
    if (! this.props.actionBar) {
      return null;
    }

    return (
      <Col align='right'>
        {this.props.actionBar}
      </Col>
    );
  }

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

Page.propTypes = {
  title: PropTypes.string,
  actionBar: PropTypes.node,
};

export default Page;
