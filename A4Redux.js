// Import createStore from Redux
const { createStore } = require('redux');

// Define initial state
const initialState = {
  count: 0
};

// Define action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Define action creators
const increment = () => ({
  type: INCREMENT,
  payload: 5 // Increase count by 5
});

const decrement = () => ({
  type: DECREMENT,
  payload: 3 // Decrease count by 3
});

// Define reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - action.payload
      };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(reducer);

// Dispatch actions
store.dispatch(increment());
console.log('Count after increment:', store.getState().count); // Should log 5

store.dispatch(decrement());
console.log('Count after decrement:', store.getState().count); // Should log 2
