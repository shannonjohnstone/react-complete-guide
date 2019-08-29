import React from 'react'
import PropTypes from 'prop-types';
import classes from './Button.module.css';

const Button = (props) => (
    <button
        className={[
            classes.Button,
            classes[props.btnType]
        ].join(' ')}
        onClick={props.onClick}
    >
        {props.children}
    </button>
);

Button.propTypes = {
    btnType: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}
export default Button;