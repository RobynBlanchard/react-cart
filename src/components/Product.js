import React from 'react';
import './Product.css'

const printPrice = (price) => {
  const fractionalPrice = price / 100;
  return `£${fractionalPrice.toFixed(2)}`
};

const Product = (props) => {
  return (
      <div class="ui card">
        <div class="image image">
          <img src={require(`../assets/${props.product.imageURL}`)} alt={props.imageURL} />
        </div>
        <div class="content">
          <span class="right floated">
            <i class="extra content"></i>
            {printPrice(props.product.price)}
          </span>
          <div class="header">{props.product.title}</div>

        </div>
        <div class="extra content">
          <span class="left floated like">
            <i class="plus icon"></i>
              Add to cart
          </span>
          <span class="right floated star">
            <i class="star icon"></i>
              Favorite
          </span>
        </div>
      </div>
  )
};

export default Product;