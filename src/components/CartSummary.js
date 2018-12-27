import React from "react";
import "./CartSummary.css";

const printPrice = price => {
  const fractionalPrice = price / 100;
  return `£${fractionalPrice.toFixed(2)}`;
};

const CartSummary = props => {
  return (
    <div className="cart-summary">
      Total price (excluding delivery): {printPrice(props.totalPrice)}
    </div>
  );
};

export default CartSummary;
