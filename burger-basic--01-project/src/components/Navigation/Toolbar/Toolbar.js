import React from 'react'
import classes from './Toolbar.module.css'
import logo from '../../../logo.svg';
import NavigationItems from '../NavigationItems/NavigationItems';

const ToolBar = (props) => (
    <header  className={`App-header ${classes.ToolBar}`}>
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
            <NavigationItems
                items={[
                    {
                        text: 'Burgers',
                        link: '/',
                        active: true
                    },
                    {
                        text: 'Contact Us',
                        link: '/contact',
                        active: false
                    }
                ]}
            />
        </nav>
      </header>
)

export default ToolBar;