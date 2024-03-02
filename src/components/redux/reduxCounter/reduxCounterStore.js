//  1. actions
//  2. dispatch
//  3. reducers
//  4. store
import { createStore } from "redux";

const inititalState = 10;

export const ACTIONS = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET',
    SUBTRACTTEN: 'SUTRACTTEN',
}

// reducer(state, actions)
const counterReducer = (state = inititalState, actions) => {
  switch (
    actions.type // increment, decrement and reset
  ) {
    case ACTIONS.INCREMENT:
      return (state = state + 1);
    case ACTIONS.DECREMENT:
      return (state = state - 1);
    case ACTIONS.RESET:
      return (state = 0);
    case ACTIONS.SUBTRACTTEN:
        return state = state - actions.payload;
    default:
      return state;
  }
};

export const reduxCounterStore = createStore(counterReducer);

// console.log(reduxCounterStore.getState())

// reduxCounterStore.dispatch({type: 'increment'});
// console.log(reduxCounterStore.getState())

// reduxCounterStore.dispatch({type: 'increment'});
// console.log(reduxCounterStore.getState())

// reduxCounterStore.dispatch({type: 'increment'});
// console.log(reduxCounterStore.getState())

// reduxCounterStore.dispatch({type: 'subtractTen', payload: 10});
// console.log(reduxCounterStore.getState())


// export default reduxCounterStore;
