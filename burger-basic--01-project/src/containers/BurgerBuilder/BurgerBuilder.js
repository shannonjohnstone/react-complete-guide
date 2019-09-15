import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger';
import BurgerBuildControl from '../../components/Burger/BurgerBuildControl'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';

import { prices } from '../../reference-data/prices';
import { ordersAPI } from '../../api';

const defaultState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    price: {
        total: 0
    },
    purchasing: false,
    loading: false,
    successfulPurchase: false,
}

class BurgerBuilder extends Component {
    state = defaultState
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
            .map(key => prices.ingredientsPrices[key] * this.state.ingredients[key])
            .reduce((prev, curr) => prev += curr, 0)

        const totalWithBase = total + prices.basePrice
        return {
            ...this.state,
            price: {
                total: (totalWithBase === prices.basePrice || totalWithBase < prices.basePrice) ? 0 : totalWithBase
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
    handlerPurchasing = () => {
        this.setState({
            ...this.state,
            purchasing: !this.state.purchasing
        })
    }

    handlePurchase = async () => {
        // setting dummy data for some values currently
        this.setState({ ...this.state, loading: true });
        try {
            const res = await ordersAPI.createOrder({
                ingredients: this.state.ingredients,
                price: this.state.price.total.toFixed(2),
                customer: {
                    name: 'Dustin',
                    address: {
                        street: '123 Fake Street',
                        postcode: '2000',
                        country: 'Australia'
                    },
                    email: 'fake@email.com'
                },
                delivery_method: 'fastest'
            });
            this.setState({ ...defaultState, successfulPurchase: true });
        } catch (error) {
            console.log('order error', error)
        } finally {
            this.setState({ ...this.state, loading: false });
        }
    }

    render() {
        return (
            <>
                <Modal show={this.state.purchasing} loading={this.state.loading} close={this.handlerPurchasing} >
                    {
                        !this.state.loading ?
                            <OrderSummary
                                price={this.state.price.total}
                                ingredients={this.state.ingredients}
                                handleCancel={this.handlerPurchasing}
                                handlePurchase={this.handlePurchase}
                            /> :
                            <Spinner />
                    }
                </Modal>
                <Burger ingredients={this.state.ingredients} successfulPurchase={this.state.successfulPurchase} />
                <BurgerBuildControl
                    canPurchase={this.state.price.total > 0}
                    price={this.state.price.total}
                    remove={this.removeIngredientsHandler}
                    add={this.addIngredientsHandler}
                    handlerPurchasing={this.handlerPurchasing}
                />
            </>
        )
    }
}

export default BurgerBuilder;