import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types';

const updateQuantity = (operation, state, product) => {
  return state.map(item => {
    if (item.product !== product) {
      return item
    }
    return {
        product,
        quantity: item.quantity + (operation === 'increase' ? 1 : -1)
      }
  });
}

export default(state=[], action) => {
  let index = state
  .map(function(e) {
    return e.product
  })
  .indexOf(action.payload);

  switch (action.type) {
    case ADD_TO_CART:
      if (index === -1) {
        return [...state, { product: action.payload, quantity: 1 }];
      }
      return updateQuantity('increase', state, action.payload)


    case REMOVE_FROM_CART:
      if (state[index].quantity === 1) {
        return state.filter(item => item.product !== action.payload);
      }
      return updateQuantity('decrease', state, action.payload)
    default:
      return state;
  }
}