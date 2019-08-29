import React from 'react'
import classes from './BurgerBuildControl.module.css'
import classesControls from './BurgerBuildControls.module.css'

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
            {controls.map(control)}
        </div>  
    )
}

export default BurgerBuildControls;
