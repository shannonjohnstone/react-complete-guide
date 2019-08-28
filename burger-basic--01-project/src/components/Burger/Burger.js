import React from 'react'
import BurgerIngredients from './BurgerIngredients';
import classes from './Burger.module.css';

/**
 * 
 * @param {Object} ingredientsObject 
 * transform object of ingredients into a burger
 * iterate over object and check each items value
 * create an array with the specified amount of undefined items
 * this is than used to create each item to the specified amount
 */
const transformIngredients = (ingredientsObject) => {
    return Object.keys(ingredientsObject).map(key => {
        // [...Array(ingredientsObject[key])], is equal to
        // [...Array(2)], this create am array with that many spots 
        // in this case those spots will be undefined
        return [...Array(ingredientsObject[key])].map((_, i) => (
            <BurgerIngredients key={`${key + i}`} type={key} />
        ));
    });
}

const Burger = (props) => (
    <div className={classes.Burger}>
        <BurgerIngredients type={'bread-top'} />
        {transformIngredients(props.ingredients)}
        <BurgerIngredients type={'bread-bottom'} />
    </div>
)

export default Burger;