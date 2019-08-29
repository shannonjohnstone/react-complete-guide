import React from 'react'
import classes from './NavigationItems.module.css';

const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        {props.items.map(item => (
            <li
                key={item.text}
                className={classes.NavigationItem}
            >
                <a 
                    href={item.link}
                    className={item.active ? classes.active : null}
                >
                    {item.text}
                </a>
            </li>
        ))}
    </ul>
)

export default NavigationItems;