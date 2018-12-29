import React from "react";
import "./CartItem.css";
import { printPrice } from "../../../utils";

class CartItem extends React.Component {
  handleClick = event => {
    const operation = event.target.value;
    this.props.updateCart(this.props.item.product, operation);
  };

  render() {
    return (
      <div class="row">
        <div class="row-section">
          <img
            src={`../assets/${this.props.item.product.imageURL}`}
            alt={this.props.imageURL}
          />
        </div>

        <div class="row-section" id="title-div">
          {this.props.item.product.title}
        </div>

        <div class="row-section">
          <input type="button" onClick={e => this.handleClick(e)} value="<" />
          {this.props.item.quantity}
          <input type="button" onClick={e => this.handleClick(e)} value=">" />
        </div>

        <div class="row-section" id="price"> 
          {printPrice(this.props.item.product.price * this.props.item.quantity)}
        </div>
      </div>
    );
  }
}

export default CartItem;
