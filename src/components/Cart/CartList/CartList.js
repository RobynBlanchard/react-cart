import React from 'react';
import { connect } from 'react-redux';

import CartItem from '../CartItem/CartItem';
import CartHeading from '../CartHeading/CartHeading';

class CartList extends React.Component {
  render() {
    const cartItems = this.props.cart.map(item => {
      return <CartItem item={item} key={item.productID} />;
    });

    return (
      <div>
        <CartHeading />
        <div class="ui items">{cartItems}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { cart: state.cart };
};

export default connect(mapStateToProps)(CartList);
