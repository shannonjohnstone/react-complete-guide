import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger';
import Button from '../../components/UI/Button/Button'

import { ordersAPI } from '../../api';
import { createOrderModal, defaultState } from '../BurgerBuilder/util/data';

class Checkout extends Component {
    handlePurchase = async () => {
        // setting dummy data for some values currently
        console.log(this.props.location)
        try {
            const res = await ordersAPI.createOrder(createOrderModal(this.props.location.state));
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
                <h1>We hope you order taste delicious</h1>
                <Burger ingredients={this.props.location.state.ingredients} />
                <Button btnType="Danger" onClick={() => this.props.history.goBack()} >Back</Button>
                <Button btnType="Success" onClick={this.handlePurchase} >Purchase</Button>
            </>
        )
    }
}

export default Checkout;
