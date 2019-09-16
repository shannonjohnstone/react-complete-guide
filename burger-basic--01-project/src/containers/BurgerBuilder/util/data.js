/**
 * defaultState
 * Default state data fro BurgerBuilder
 */
export const defaultState = {
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

/**
 * createOrderModal
 * This is a dummy modal of data for creating a burger order
 * @param {ojbect} data 
 */
export const createOrderModal = (data) => ({
    ingredients: data.ingredients,
    price: data.price.total.toFixed(2),
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
})