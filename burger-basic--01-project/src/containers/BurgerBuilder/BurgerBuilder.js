import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger';
import BurgerBuildControl from '../../components/Burger/BurgerBuildControl'

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 1.5,
    meat: 2.0,
    cheese: 1.0
}

const BASE_PRICE = 4.0;

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        price: {
            total: BASE_PRICE
        }
    }
    manageIngredients = (type) => (conditionType) => {
        const currentValue = this.state.ingredients[type];
        const conditions = {
            add: () => this.state.ingredients[type] + 1,
            remove: () => (currentValue === 0 || currentValue < 0) ? 0 : this.state.ingredients[type] - 1
        }

        return {
            ...this.state,
            ingredients: {
                ...this.state.ingredients,
                [type]: conditions[conditionType](),
            }
        }
    }
    managePrice = (type) => (conditionType) => {
        const total = Object.keys(this.state.ingredients)
            .filter(key => this.state.ingredients[key] > 0)
            .map(key => INGREDIENT_PRICES[key] * this.state.ingredients[key])
            .reduce((prev, curr) => prev += curr, BASE_PRICE) 

        return {
            ...this.state,
            price: {
                total: (total === BASE_PRICE || total < BASE_PRICE) ? BASE_PRICE : total
            }
        }
    }
    addIngredientsHandler = (type) => {
        const conditionType = 'add';
        this.setState(
            this.manageIngredients(type)(conditionType),
            () => this.setState(this.managePrice(type)(conditionType))
        )
    }
    removeIngredientsHandler = (type) => {
        const conditionType = 'remove';
        this.setState(
            this.manageIngredients(type)(conditionType),
            () => this.setState(this.managePrice(type)(conditionType))
        )
    }
    render() {
        return (
            <>
                <p>Burger Builder</p>
                <p>Total Price: ${this.state.price.total}</p>
                <Burger ingredients={this.state.ingredients} />
                <BurgerBuildControl remove={this.removeIngredientsHandler} add={this.addIngredientsHandler} />
            </>
        )
    }
}

export default BurgerBuilder;