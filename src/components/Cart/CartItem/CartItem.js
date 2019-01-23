import React from 'react';
import { connect } from 'react-redux';

import './CartItem.css';
import { printPrice } from '../../../utils';
import { addToCart, removeFromCart } from '../../../actions';

class CartItem extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="row-section">
          <img
            src={this.props.item.product.imageURL}
            alt={this.props.item.imageURL}
          />
        </div>

        <div className="row-section" id="title-div">
          {this.props.item.product.title}
        </div>

        <div className="row-section">
          <input
            type="button"
            onClick={() => this.props.removeFromCart(this.props.item.product)}
            value="<"
          />
          {this.props.item.quantity}
          <input
            type="button"
            onClick={() => this.props.addToCart(this.props.item.product)}
            value=">"
          />
        </div>

        <div className="row-section" id="price">
          {printPrice(this.props.item.product.price * this.props.item.quantity)}
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addToCart, removeFromCart }
)(CartItem);
