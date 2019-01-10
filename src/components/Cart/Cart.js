import React from 'react';
import { connect } from 'react-redux';

import CartList from './CartList/CartList';
import CartSummary from './CartSummary/CartSummary';
import { getCartTotal } from '../../reducers';

class Cart extends React.Component {
  render() {
    return (
      <div className="whole-cart">
        <CartList />
        <CartSummary totalPrice={this.props.cartTotal} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { cartTotal: getCartTotal(state) };
};

export default connect(
  mapStateToProps,
  null
)(Cart);
