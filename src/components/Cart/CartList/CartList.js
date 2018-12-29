import React from "react";
import CartItem from "../CartItem/CartItem";
import CartHeading from "../CartHeading/CartHeading";

class CartList extends React.Component {
  updateCart = (product, operation) => {
    this.props.updateCart(product, operation);
  };

  render() {
    const cartItems = this.props.items.map(item => {
      return <CartItem item={item} updateCart={this.updateCart} />;
    });
    
    return (
      <div>
        <CartHeading />
        <div class="ui items">{cartItems}</div>
      </div>
    );
  }
}

export default CartList;
