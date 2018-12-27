import React from "react";
import "./CartSummary.css";
import { printPrice } from './utils';

const CartSummary = props => {
  return (
    <div className="cart-summary">
      Total price (excluding delivery): {printPrice(props.totalPrice)}
    </div>
  );
};

export default CartSummary;
