import './ProductList.css';
import Product from './Product';
import React from 'react'

const ProductList = (props) => {
  const images = props.products.map((product) => {
    return <Product  product={product}/>;
  });
  return <div className="product-list"> {images}</div>;
}

export default ProductList;