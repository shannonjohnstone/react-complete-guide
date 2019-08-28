import React from 'react'

const Layout = (props) => (
    <>
        <div>Toolbar, Sidebar, Backdrop</div>
        <main>
            {props.children}
        </main>
    </>
)

export default Layout;