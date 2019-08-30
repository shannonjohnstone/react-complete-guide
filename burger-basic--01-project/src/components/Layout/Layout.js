import React from 'react'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends React.Component {
    state = {
        sideDrawerStatus: false
    }
    sideDrawerOpenClose = () => {
        this.setState({ sideDrawerStatus: !this.state.sideDrawerStatus })
    }
    render() {
        return (
            <>
                <Toolbar sideDrawerOpenClose={this.sideDrawerOpenClose} />
                <SideDrawer 
                    sideDrawerStatus={this.state.sideDrawerStatus} 
                    sideDrawerOpenClose={this.sideDrawerOpenClose}
                />
                <div>Toolbar, Sidebar, Backdrop</div>
                <main>
                    {this.props.children}
                </main>
            </>
        )
    }
}

export default Layout;