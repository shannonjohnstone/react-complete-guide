import React from 'react'

const OrderSummary = props => {
    const ingredientsSummary = (ingredients) => (
        Object.keys(ingredients)
            .filter(key => ingredients[key] > 0)
            .map((key, index) => <li key={`${key + index}`}><span style={{ textTransform: 'capitalize' }}>{key}</span>: {ingredients[key]}</li> )
    )

    return (
        <>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientsSummary(props.ingredients)}
            </ul>
            <button>Continue to checkout</button>
            <button onClick={props.handleCancel}>Cancel</button>
        </>
    )
}

export default OrderSummary;