import React from 'react'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends React.Component {
    state = {
        isSideDrawerOpen: false
    }
    handleSideDrawerOpenClose = () => {
        this.setState((prevState) => ({ isSideDrawerOpen: !prevState.isSideDrawerOpen }))
    }
    render() {
        return (
            <>
                <Toolbar handleSideDrawerOpenClose={this.handleSideDrawerOpenClose} />
                <SideDrawer 
                    isSideDrawerOpen={this.state.isSideDrawerOpen} 
                    handleSideDrawerOpenClose={this.handleSideDrawerOpenClose}
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