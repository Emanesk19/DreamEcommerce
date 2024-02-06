import { ADD_TO_Cart, REMOVE_FROM_Cart } from './constants';

export const cartData = (data = [], action:any) => {
  switch (action.type) {
    case ADD_TO_Cart:
      console.warn("add to cart from reducer ", action.data);
      return [action.data, ...data];
    case REMOVE_FROM_Cart:
      console.warn("remove from  cartreducer ", action.data);
      // const updatedData = data.length ? data.slice(0, data.length - 1) : [];
      const remaningItems = data.filter((item:any)=>item.id !== action.data)
      return [...remaningItems];
    default:
      return data;
  }
};