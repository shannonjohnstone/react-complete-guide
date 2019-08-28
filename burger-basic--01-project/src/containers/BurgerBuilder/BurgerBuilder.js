import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    render() {
        return (
            <>
                <p>Burger Builder</p>
                <Burger  />
                <p>Controls</p>
            </>
        )
    }
}

export default BurgerBuilder;