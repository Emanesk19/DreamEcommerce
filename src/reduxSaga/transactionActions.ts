import { FETCH_TRANSACTIONS, SET_TRANSACTIONS } from "./constants";

export const fetchTransactions = () => ({
    type: FETCH_TRANSACTIONS,
  });
  
  export const setTransactions = (transactions:any) => ({
    type: SET_TRANSACTIONS,
    payload: transactions,
    
  });