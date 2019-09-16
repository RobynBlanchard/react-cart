import React from "react";
import "./CartSummary.css";
import { printPrice } from '../../../utils';

const CartSummary = ({totalPrice}) => {
  return (
    <div className="cart-summary">
      Total price (excluding delivery): {printPrice(totalPrice)}
    </div>
  );
};

export default CartSummary;
