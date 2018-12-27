import React from "react";
import "./Product.css";
import { printPrice } from './utils';

class Product extends React.Component {
  handleClick = event => {
    this.props.updateParent(this.props.product);
  };

  render() {
    return (
      <div class="ui card">
        <div class="image image">
          <img
            src={`../assets/${this.props.product.imageURL}`}
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
            <button onClick={this.handleClick}>
              <i class="plus icon" />
              Add to cart
            </button>
          </span>
          <span class="right floated star">
            <i class="star icon" />
            Favorite
          </span>
        </div>
      </div>
    );
  }
}

export default Product;
