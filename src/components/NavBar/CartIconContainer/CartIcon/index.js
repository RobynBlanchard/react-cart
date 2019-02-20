import React from 'react';
import { Link } from 'react-router-dom';

const CartIcon = ({ quantity }) => {
  return (
    <div>
      <Link to="/cart" className="item">
        <i className="shop icon" />
        <span label="product count">{quantity}</span>
      </Link>
    </div>
  );
};

export default CartIcon;
