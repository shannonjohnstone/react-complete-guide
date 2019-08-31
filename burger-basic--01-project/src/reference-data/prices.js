const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 1.5,
    meat: 2.0,
    cheese: 1.0
}

const BASE_PRICE = 4.0;

export const prices = Object.freeze({
    basePrice: BASE_PRICE,
    ingredientsPrices: INGREDIENT_PRICES
})