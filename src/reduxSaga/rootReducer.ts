import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { transactionsReducer } from "./transactionReducer";

export default combineReducers({
    cartDatas: cartData,
  transactions: transactionsReducer
});