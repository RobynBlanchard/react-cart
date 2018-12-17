import React from 'react';
import './Product.css'

const Product = () => {
  return (
    <div class="container">
      <div class="ui card">
      <div class="content">
        <i class="right floated like icon"></i>
        <i class="right floated star icon"></i>
        <div class="header">Product</div>
        <div class="description">
          <p>This is a description. This is a description. This is a description. This is a description. </p>
        </div>
      </div>
      <div class="extra content">
        <span class="left floated like">
          <i class="like icon"></i>
          Like
        </span>
        <span class="right floated star">
          <i class="star icon"></i>
          Favorite
        </span>
      </div>
    </div>
    </div>
  )
};

export default Product;