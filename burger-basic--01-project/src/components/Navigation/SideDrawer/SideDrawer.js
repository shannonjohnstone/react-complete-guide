import React from 'react'
import classes from './SideDrawer.module.css';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import Logo from '../../../logo.svg'

const SideDrawer = (props) => {
    return (
        <div className={classes.SideDrawer}>
            <img src={Logo} height="10%" alt="Logo" />
            <NavigationItems />
        </div>
    )
}

export default SideDrawer;