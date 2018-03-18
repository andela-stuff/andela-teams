/**
 * @fileOverview Page component
 *
 * @author Franklin Chieze
 *
 * @requires NPM:redux
 * @requires NPM:react-redux
 * @requires NPM:react-router-dom
 * @requires ../actions/actionCreators
 * @requires ./Layout.jsx
 */

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actionCreators from '../actions/actionCreators';
import Layout from './Layout.jsx';

function mapStateToProps(state) {
    return {
        team: state.team
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));

export default App;
