import React from 'react'
import classes from './Toolbar.module.css'
import logo from '../../../logo.svg';
import NavigationItems from '../NavigationItems/NavigationItems';

const ToolBar = (props) => (
    <header className={`App-header ${classes.ToolBar}`}>
        <img src={logo} onClick={() => alert('hi')} className="App-logo" alt="logo" />
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
        <p onClick={props.sideDrawerOpenClose}>Test open</p>
    </header>
)

export default ToolBar;