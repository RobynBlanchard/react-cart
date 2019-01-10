import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  products: productsReducer,
  cart: cartReducer
});

export const getCartQuantity = state => {
  if (state.cart.length === 0) {
    return 0;
  }
  const quantityObj = state.cart.reduce((a, b) => ({
    quantity: a.quantity + b.quantity
  }));
  return quantityObj.quantity;
};

export const getCartTotal = state => {
  return state.cart.reduce(function(prev, cur) {
    return prev + cur.product.price * cur.quantity;
  }, 0);
};
