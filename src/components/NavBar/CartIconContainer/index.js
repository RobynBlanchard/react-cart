import React from 'react';
import { connect } from 'react-redux';

import { getCartQuantity } from '../../../reducers';
import CartIcon from './CartIcon';

const CartIconContainer = ({ quantity }) => {
  return <CartIcon quantity={quantity} />;
};

const mapStateToProps = state => {
  return { quantity: getCartQuantity(state) };
};

export default connect(
  mapStateToProps,
  null
)(CartIconContainer);
