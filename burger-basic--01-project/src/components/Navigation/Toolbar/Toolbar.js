import React from 'react'
import classes from './Toolbar.module.css'
import logo from '../../../logo.svg';
import NavigationItems from '../NavigationItems/NavigationItems';

const ToolBar = (props) => (
    <header  className={`App-header ${classes.ToolBar}`}>
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
            <NavigationItems />
        </nav>
      </header>
)

export default ToolBar;