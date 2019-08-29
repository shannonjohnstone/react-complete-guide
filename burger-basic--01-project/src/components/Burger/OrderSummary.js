import React from 'react'
import Button from '../../components/UI/Button/Button';

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
            <Button btnType="Success" onClick={() => {}}>Continue to checkout</Button>
            <Button btnType="Danger" onClick={props.handleCancel}>Cancel</Button>
        </>
    )
}

export default OrderSummary;