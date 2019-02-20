import React from 'react';

import './ProductList.css';
import Product from '../Product';


const ProductList = ({ products }) => {
  const productList = products.map(product => {
    return <Product product={product} key={product.productID} />;
  });

  return (
    <div className="product-list">{productList}</div>
  )
}

export default ProductList
