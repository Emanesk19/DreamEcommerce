import {createStore} from 'redux'
import {cartAdd}from './reducer'
const initialState:any = []; // Provide the initial state for your reducer

const store = createStore(cartAdd,initialState);


export default store