const redux = require('redux');

const createStore = redux.createStore;

const initialState = { counter: 0 };

const COUNT_TYPES = {
    INC: "INC_COUNT",
    ADD: "ADD_COUNT",
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNT_TYPES.INC:
            return { ...state, counter: state.counter + 1 }
        case COUNT_TYPES.ADD:
            return { ...state, counter: state.counter + action.value }
        default:
            return state
    }
}

const store = createStore(rootReducer)

store.subscribe(() => {
    console.log("[Subscription]", store.getState())
})

console.log(store.getState());

store.dispatch({ type: COUNT_TYPES.ADD, value: 10 })
store.dispatch({ type: COUNT_TYPES.INC })

console.log(store.getState());