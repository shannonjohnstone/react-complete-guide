import React from 'react'
import classes from './SideDrawer.module.css';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import Logo from '../../../logo.svg'
import BackDrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {
    const openCloseState = props.isSideDrawerOpen ? classes.Open : classes.Close;
    return (
        <>
            <BackDrop show={props.isSideDrawerOpen} handleClick={props.handleSideDrawerOpenClose}  />
            <div className={[classes.SideDrawer, openCloseState].join(' ')}>
                <img src={Logo} height="10%" alt="Logo" />
                <NavigationItems />
            </div>
        </>
    )
}

export default SideDrawer;