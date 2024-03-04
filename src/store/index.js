import { createStore } from 'redux'

const defaultState = {
  cart: [
    {
      id: 1,
      name: 'Black shoe',
      price: 3000
    }
  ],
  total: 0
}

const reducerFn = (state = defaultState, action) => {
  // Must not mutate the original state
  // Synchronous function
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        total: state.total + action.payload.value
      }
    case 'DECREMENT':
      return {
        ...state,
        total: state.total - action.payload.value
      }
    case 'ADD_BY':
      return {
        ...state,
        total: state.total + action.payload.value
      }
    default:
      return state
  }
}

const store = createStore(reducerFn)
export default store
