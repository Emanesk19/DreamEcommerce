import { ADD_TO_Cart, ADJUST_QUANTITY, REMOVE_FROM_Cart } from './constants';

export const cartData = (state = [], action: any) => {
  switch (action.type) {
    case ADD_TO_Cart:
      console.warn("add to cart from reducer ", action.data);
      return [action.data, ...state];

    case ADJUST_QUANTITY:
      const { productId, newQuantity } = action.payload;
      const updatedItems = state.map((item: any) => {
        if (item.id === productId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      return updatedItems;

    case REMOVE_FROM_Cart:
      console.warn("remove from cart reducer ", action.data);
      const remainingItems = state.filter((item: any) => item.id !== action.data);
      return remainingItems;

    default:
      return state;
  }
};