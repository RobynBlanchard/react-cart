import React from "react";
import CartItem from "./CartItem";

class CartList extends React.Component {
  // updateParent = (value) => {
  //   this.props.updateCart(value);
  //   // console.log(value);
  // }

  updateCart = (product, operation) => {
    // console.log(product);
    // console.log(operation);
    this.props.updateCart(product, operation);
  }

  render() {
    const cartItems = this.props.items.map(item => {
      return <CartItem item={item} updateCart={this.updateCart}/>;
    });
    return <div class="ui items">{cartItems}</div>;
  }
}

export default CartList;
