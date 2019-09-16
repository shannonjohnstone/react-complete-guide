/**
 * ordersAPI singleton instance
 * factory singleton instance of order API, no matter how many times this component
 * is imported it will only create the one instance
 */

let instance;

export const ordersAPI = ((axios, baseURL, apiName) => {
    const log = (msg) => console.log(`@@ ${apiName} > ${msg}`)

    if (!instance) {
        log('Initializing')
        instance = axios.create({ baseURL });
    }

    return {
        createOrder: (data) => instance.post(`/orders.json`, data),
        getIngredients: () => instance.get(`/ingredients.json`),
        getInstance: () => instance
    }
})(
    require('axios'),
    `https://burger-builder-d1969.firebaseio.com/`,
    'Orders API'
);