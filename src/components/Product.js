import React from 'react';
import './Product.css';

const printPrice = price => {
  const fractionalPrice = price / 100;
  return `£${fractionalPrice.toFixed(2)}`;
};

// change to class and have state of added or

class Product extends React.Component {
  addToCart = () => {
    console.log('Added')
  }

  render() {
    return (
      <div class="ui card">
        <div class="image image">
          <img
            src={require(`../assets/${this.props.product.imageURL}`)}
            alt={this.props.imageURL}
          />
        </div>
        <div class="content">
          <span class="right floated">
            <i class="extra content" />
            {printPrice(this.props.product.price)}
          </span>
          <div class="header">{this.props.product.title}</div>
        </div>
        <div class="extra content">
          <span class="left floated plus">
            <i onClick={this.addToCart} class="plus icon" />

            Add to cart
            {/* pass state up when cart icon clicked or after each product clicked? */}
          </span>
          <span class="right floated star">
            <i class="star icon" />
            Favorite
          </span>
        </div>
      </div>
    );
  }
};

export default Product;
