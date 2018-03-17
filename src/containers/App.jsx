import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

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
