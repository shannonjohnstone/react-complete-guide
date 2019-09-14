import React from 'react'
import Button from '../../components/UI/Button/Button';

const OrderSummary = React.memo(function OrderSummary(props) {
    const ingredientsSummary = (ingredients) => (
        Object.keys(ingredients)
            .filter(key => ingredients[key] > 0)
            .map((key, index) => <li key={`${key + index}`}><span style={{ textTransform: 'capitalize' }}>{key}</span>: {ingredients[key]}</li>)
    )

    return (
        <>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientsSummary(props.ingredients)}
            </ul>
            <p>Total price: <strong>${props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" onClick={props.handleCancel}>Cancel</Button>
            <Button btnType="Success" onClick={() => alert('You have continued')}>Continue</Button>
        </>
    )
})

export default OrderSummary;