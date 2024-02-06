import { ADD_TO_Cart } from "./constants"
import {REMOVE_FROM_Cart} from "./constants"

export const addToCart = (data:any)=>{
    console.warn("add to cart action is called " , data)
    return{
        type:ADD_TO_Cart,
        data
    }
}

export const removeFromCart = (data:any)=>{
    console.warn("remove from cart action is called " , data)
    return{
        type:REMOVE_FROM_Cart,
        data
    }
}