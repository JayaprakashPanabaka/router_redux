import { createStore, combineReducers } from "redux";

// 1. store
// 2. reducers
// 3. dispatch
// 4. actions

const initialState = {
  balance: 1000,
  name: "JP",
  contact: 8099099123,
};

export const ACTIONS = {
  DEPOSIT: "DEPOSIT",
  WITHDRAWAL: "WITHDRAWAL",
  UPDATE_NAME: "UPDATE_NAME",
  UPDATE_CONTACT: "UPDATE_CONTACT",
  TRANSACTIONS: 'TRANSACTIONS',
};

const reduxAccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.DEPOSIT:
      return { ...state, balance: state.balance + action.payload };
    case ACTIONS.WITHDRAWAL:
      return { ...state, balance: state.balance - action.payload };
    case ACTIONS.UPDATE_NAME:
      return { ...state, name: action.payload };
    case ACTIONS.UPDATE_CONTACT:
      return { ...state, contact: action.payload };
    default:
      return state;
  }
};

const initialTransactions = [];

const reduxTransactionsReducer = (state = initialTransactions, action) => {
    switch(action.type) {
        case ACTIONS.TRANSACTIONS: 
        return [...state, {
            id: action.payload.id,
            value: action.payload.value,
            type: action.payload.type,
            date: action.payload.date,
        }]
    }
}

const rootReducer = combineReducers({
    account: reduxAccountReducer,
    transactions: reduxTransactionsReducer,
})

// withdrawal, deposit, balance, time n date


export const reduxBankStore = createStore(rootReducer);

console.log(reduxBankStore.getState());

reduxBankStore.dispatch({type: ACTIONS.DEPOSIT, payload: 11});
console.log(reduxBankStore.getState());

