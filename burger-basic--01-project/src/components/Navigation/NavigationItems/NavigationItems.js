import React from 'react'
import classes from './NavigationItems.module.css';

const defaultNavigationItems = [
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
]

const NavigationItems = ({ items = defaultNavigationItems }) => (
    <ul className={classes.NavigationItems}>
        {items.map(item => (
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