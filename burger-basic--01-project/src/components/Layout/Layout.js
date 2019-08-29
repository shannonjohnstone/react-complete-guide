import React from 'react'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const Layout = (props) => (
    <>
        <Toolbar />
        <SideDrawer />
        <div>Toolbar, Sidebar, Backdrop</div>
        <main>
            {props.children}
        </main>
    </>
)

export default Layout;