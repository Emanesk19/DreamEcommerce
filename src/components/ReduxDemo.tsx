import React from 'react'
import {addToCart} from '../reduxSaga/action'
import { useDispatch } from 'react-redux'
import SampleNavBar from './SampleNavBar';


const ReduxDemo = () => {
    const dispatch = useDispatch();
    const product={
        name:'iphone',
        category:'mobile'
    }
  return (
    <div>
        <SampleNavBar/>
        <button onClick={()=>dispatch(addToCart(product))}>Add to carts</button>
    </div>
  )
}

export default ReduxDemo