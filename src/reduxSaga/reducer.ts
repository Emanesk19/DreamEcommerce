import {addToCart} from './constants'

export const cartAdd=(data=[],action:any)=>{

    switch (action.type) {
        case "ADD_TO_Cart":
            console.warn("addToCart"  , action);
            return [action.data , ...data]    
        default:
            return []
    }

}