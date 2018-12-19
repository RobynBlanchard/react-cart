import React from 'react';
import CartItem from './CartItem';

class CartList extends React.Component {
  // state = { items: [1, 2, 3, 4, 5] };

  render() {
      const cartItems = this.props.items.map((item) => {
        return <CartItem  item={item}/>;
      });
      return (
      <div class="ui items">
        {cartItems}
      </div>

      )
  }
}

export default CartList;
