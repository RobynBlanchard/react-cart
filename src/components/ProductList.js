import './ProductList.css';
import Product from './Product';
import React from 'react'

const ProductList = () => {
  const images = [1,2,3,4,5,6,7].map(() => {
    return <Product  />;
  });
  return <div className="product-list"> {images}</div>;
}

export default ProductList;