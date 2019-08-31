import React from 'react'
import classes from './Toolbar.module.css'
import logo from '../../../logo.svg';
import NavigationItems from '../NavigationItems/NavigationItems';
import Hamburger from './NavigationHamburger';

const ToolBar = (props) => (
    <header className={`App-header ${classes.ToolBar}`}>
        <img src={logo} className="App-logo" alt="logo" />
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
        <Hamburger handleSideDrawerOpenClose={props.handleSideDrawerOpenClose} />
    </header>
)

export default ToolBar;