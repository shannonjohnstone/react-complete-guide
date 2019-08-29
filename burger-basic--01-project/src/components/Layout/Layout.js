import React from 'react'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const Layout = (props) => (
    <>
        <Toolbar />
        <div>Toolbar, Sidebar, Backdrop</div>
        <main>
            {props.children}
        </main>
    </>
)

export default Layout;