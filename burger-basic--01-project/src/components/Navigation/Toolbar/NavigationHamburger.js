import React from 'react'
import PropTypes from 'prop-types';
import classes from './NavigationHamburger.module.css';

const NavigationHamburger = (props) => (
    <div className={classes.NavigationHamburger} onClick={props.handleSideDrawerOpenClose}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

NavigationHamburger.propTypes = {
    handleSideDrawerOpenClose: PropTypes.func.isRequired
}

export default NavigationHamburger
