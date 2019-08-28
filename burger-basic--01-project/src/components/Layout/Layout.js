import React from 'react'

export default function Layout(props) {
    return (
        <>
            <div>Toolbar, Sidebar, Backdrop</div>
            <main>
                {props.children}
            </main>
        </>
    )
}
