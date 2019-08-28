import React from 'react'
import BurgerIngredients from './BurgerIngredients';
import classes from './Burger.module.css';

const Burger = (props) => (
    <div className={classes.Burger}>
        <BurgerIngredients type={'bread-top'} />
        <BurgerIngredients type={'cheese'} />
        <BurgerIngredients type={'bacon'} />
        <BurgerIngredients type={'meat'} />
        <BurgerIngredients type={'bread-bottom'} />
    </div>
)

export default Burger;