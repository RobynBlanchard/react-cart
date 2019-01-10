import React from 'react';
import { connect } from 'react-redux';

import './Product.css';
import { printPrice } from './../../../utils';
import { addToCart } from '../../../actions';

class Product extends React.Component {
  render() {
    return (
      <div className="ui card">
        <div className="image image">
          <img
            src={this.props.product.imageURL}
            alt={this.props.product.title}
          />
        </div>
        <div className="content">
          <span className="right floated">
            <i className="extra content" />
            {printPrice(this.props.product.price)}
          </span>
          <div className="header">{this.props.product.title}</div>
        </div>
        <div className="extra content">
          <span className="left floated plus">
            <button
              onClick={() => this.props.addToCart(this.props.product)}
              className="add-to-cart"
            >
              <i className="plus icon" />
              Add to cart
            </button>
          </span>
          <span className="right floated star">
            <i className="star icon" />
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
