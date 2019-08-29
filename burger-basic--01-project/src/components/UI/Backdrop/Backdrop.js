import React from 'react'
import classes from './Backdrop.module.css';

const Backdrop = (props) => (
    props.show ? <div onClick={props.handleClick} className={classes.Backdrop}>{props.children}</div> : null
)

export default Backdrop;