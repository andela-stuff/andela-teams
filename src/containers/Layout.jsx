import React from 'react';

import Sidebar from '../components/Sidebar.jsx';
//import PageTop from './MainPanel';

class Layout extends React.Component {
    render() {
        return (
            <div className="wrapper">
                {React.cloneElement(<Sidebar />, this.props)}
            </div>
        )
    }
}

export default Layout;
