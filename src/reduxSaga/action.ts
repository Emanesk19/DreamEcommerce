import { ADD_TO_Cart, ADJUST_QUANTITY } from "./constants"
import {REMOVE_FROM_Cart} from "./constants"

export const addToCart = (data:any)=>{
    console.warn("add to cart action is called " , data)
    return{
        type:ADD_TO_Cart,
        data
    }
}

export const adjustQuantity = (itemID:any, value:any) => {
    return {
      type: ADJUST_QUANTITY,
      payload: {
        id: itemID,
        qty: value,
      },
    };
  };
  
export const removeFromCart = (data:any)=>{
    console.warn("remove from cart action is called " , data)
    return{
        type:REMOVE_FROM_Cart,
        data
    }
}