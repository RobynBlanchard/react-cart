import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../../../actions';
import './index.css';

const Actions = ({ product, addToCart }) => {
  return (
    <div className="extra content">
      <span className="left floated plus">
        <button onClick={() => addToCart(product)} className="add-to-cart">
          <i className="plus icon" />
          Add to cart
        </button>
      </span>
      <span className="right floated star">
        <i className="star icon" />
        Favorite
      </span>
    </div>
  );
};

export default connect(
  null,
  {
    addToCart
  }
)(Actions);
