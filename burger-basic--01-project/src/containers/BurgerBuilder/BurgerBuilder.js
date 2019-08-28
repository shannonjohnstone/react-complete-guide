import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 2
        }
    }
    render() {
        return (
            <>
                <p>Burger Builder</p>
                <Burger ingredients={this.state.ingredients} />
                <p>Controls</p>
            </>
        )
    }
}

export default BurgerBuilder;