// reducer.js
import { SET_TRANSACTIONS } from './constants';

const initialState = {
  transactions: [],
};

export const transactionsReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case SET_TRANSACTIONS:
      console.log('Reducer - SET_TRANSACTIONS:', action.payload); // Check the payload
      return {
        ...state,
        transactions: action.payload,
      };
    default:
      return state;
  }
};