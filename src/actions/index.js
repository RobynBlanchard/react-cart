import testData from '../testData';
import { fetchProducts as getProducts } from '../fetchProducts';
import { USING_AWS_API } from '../config';

export const fetchProducts = () => {
  if (!USING_AWS_API) {
    return {
      type: 'FETCH_PRODUCTS',
      payload: testData
    };
  }

  return async dispatch => {
    const response = await getProducts();

    // Match structure of api data and mock data
    const mappedResponse = response.data.Items.map(item => {
      return {
        imageURL: item.imageURL.S,
        price: parseInt(item.price.N),
        productID: parseInt(item.productID.N),
        title: item.title.S
      };
    });

    dispatch({ type: 'FETCH_PRODUCTS', payload: mappedResponse });
  };
};

export const addToCart = product => {
  return {
    type: 'ADD_TO_CART',
    payload: product
  };
};

export const removeFromCart = product => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: product
  };
};

