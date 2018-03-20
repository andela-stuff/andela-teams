/**
 * @fileOverview Layout component
 *
 * @author Franklin Chieze
 *
 * @requires NPM:react
 * @requires ../components/PageTop.jsx
 * @requires ../components/Sidebar.jsx
 */

import React from 'react';

import PageTop from '../components/PageTop.jsx';
import Sidebar from '../components/Sidebar.jsx';

/**
* Layout component
* @class Layout
*/
class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            idToken: null, // Token indicating user is logged in
            user: null, // Full user for that logged in user, if exists
        }
    }

    render() {
        return (
            <div>
                <main className=''>
                    <Sidebar {...this.props} />
                    <PageTop location={this.props.location} user={this.state.user} />

                    <back-top></back-top>
                </main>
            </div>
        )
    }
}

export default Layout;
