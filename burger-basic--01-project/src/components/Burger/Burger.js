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
const transformIngredients = (ingredientsObject) => ({ el, defaultMsg }) => {
    const results = Object.keys(ingredientsObject).map(key => {
        // [...Array(ingredientsObject[key])], is equal to
        // [...Array(2)], this create am array with that many spots 
        // in this case those spots will be undefined
        return [...Array(ingredientsObject[key])].map((_, index) =>
            el({ key, index })
        )
    }).reduce((prev, curr) => prev.concat(curr), []);

    return results.length ? results : defaultMsg();
}

const Burger = (props) => (
    <div className={classes.Burger}>
        <BurgerIngredients type={'bread-top'} />
        {transformIngredients(props.ingredients)({
            el: ({ key, index }) => (
                <BurgerIngredients key={`${key + index}`} type={key} />
            ),
            defaultMsg: () => {
                return props.successfulPurchase ? 
                    <p>Thanks for you purchase, would you like to build another ?</p> : 
                    <p><strong>There seems to be no ingredients added!</strong></p>
            }
        })}
        <BurgerIngredients type={'bread-bottom'} />
    </div>
)

export default Burger;