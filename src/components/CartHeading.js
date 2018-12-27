import React from "react";
import "./CartHeading.css";

const CartHeading = () => {
  return (
    <div>
      <div class="row" id="headings">
        <div class="row-section heading" />
        <div class="row-section heading" id="title-div">
          Item
        </div>
        <div class="row-section heading">Quantity</div>
        <div class="row-section heading">Price</div>
      </div>
    </div>
  );
};

export default CartHeading;
