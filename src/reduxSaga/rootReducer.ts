import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { transactionsReducer } from "./transactionReducer";
import { formReducer } from "../reduxSaga/reducerLogin";

export default combineReducers({
    cartDatas: cartData,
  transactions: transactionsReducer,
  form: formReducer,

});