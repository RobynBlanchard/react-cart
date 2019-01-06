import React from "react";
import CartList from "./CartList/CartList";
import CartSummary from "./CartSummary/CartSummary";

class Cart extends React.Component {
  updateCart = (product, operation) => {
    this.props.updateCart(product, operation);
  };

  totalPrice = () => {
    return this.props.items.reduce(function(prev, cur) {
      return prev + (cur.product.price * cur.quantity);
    }, 0);
  };

  render() {
    return (
      <div className="whole-cart">
        <CartList items={this.props.items} updateCart={this.updateCart} />
        <CartSummary totalPrice={this.totalPrice()} />
      </div>
    );
  }
}

export default Cart;
