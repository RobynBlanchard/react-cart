import testData from '../testData';
import { fetchProducts as getProducts } from '../fetchProducts';
import {
  USING_AWS_API,
  REACT_APP_AWS_ACCESS_KEY,
  REACT_APP_AWS_SECRET_KEY
} from '../config';
import AWS from 'aws-sdk';

// TODO - try, catch
export const fetchProductsAndImages = () => async (dispatchEvent, getState) => {
  await dispatchEvent(fetchProducts());

  const products = getState().products;
  products.forEach(el => {
    dispatchEvent(fetchImage(el.imageURL, el.productID));
  });
};

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

export const fetchImage = (url, productID) => {
  if (!USING_AWS_API) {
    return {
      type: 'FETCH_IMAGE',
      payload: {
        url: `../assets/${url}`,
        productID
      }
    };
  }

  return async (dispatch, getState) => {
    const s3 = new AWS.S3({
      accessKeyId: REACT_APP_AWS_ACCESS_KEY,
      secretAccessKey: REACT_APP_AWS_SECRET_KEY,
      region: 'eu-west-1'
    });
    // TODO make public
    var params = { Bucket: 'product-api-images', Key: url };
    s3.getSignedUrl('getObject', params, (err, fetchedUrl) => {
      if (err) {
        console.log(err);
      } else {
        dispatch({
          type: 'FETCH_IMAGE',
          payload: {
            url: fetchedUrl,
            productID
          }
        });
      }
    });
  };
};
