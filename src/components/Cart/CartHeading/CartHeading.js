import React from "react";
import "./CartHeading.css";

const CartHeading = () => {
  return (
    <div>
      <div className="row" id="headings">
        <div className="row-section heading" />
        <div className="row-section heading" id="title-div">
          Item
        </div>
        <div className="row-section heading">Quantity</div>
        <div className="row-section heading">Price</div>
      </div>
    </div>
  );
};

export default CartHeading;
