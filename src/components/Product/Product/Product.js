import React from 'react';
import { connect } from 'react-redux';

import './Product.css';
import { printPrice } from './../../../utils';
import { addToCart } from '../../../actions';

class Product extends React.Component {
  render() {
    return (
      <div class="ui card">
        <div class="image image">
          <img
            src={this.props.product.imageURL}
            alt={this.props.product.title}
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
            <button
              onClick={() => this.props.addToCart(this.props.product)}
              class="add-to-cart"
            >
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

export default connect(
  null,
  {
    addToCart
  }
)(Product);
