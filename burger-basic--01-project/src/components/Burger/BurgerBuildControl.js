import React from 'react'
import classes from './BurgerBuildControl.module.css'
import classesControls from './BurgerBuildControls.module.css'
import constants from 'jest-haste-map/build/constants';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const BurgerBuildControls = (props) => {
    const control = (controlProps) => {
        return (
            <div className={classes.BuildControl} key={controlProps.label}>
                <div className={classes.Label}>{controlProps.label}</div>
                <button
                    className={classes.Less}
                    onClick={() => props.remove(controlProps.type)}
                >
                    Less
                </button>
                <button
                    className={classes.More}
                    onClick={() => props.add(controlProps.type)}
                >
                    More
                </button>
            </div>
        )
    }

    return (
        <div className={classesControls.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(control)}
            <button
                disabled={!props.canPurchase}
                className={classesControls.OrderButton}
                onClick={props.handlerPurchasing}
            >
                ORDER NOW
            </button>
        </div>
    )
}

export default BurgerBuildControls;
