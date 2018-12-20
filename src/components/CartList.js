import React from 'react';
import CartItem from './CartItem';

class CartList extends React.Component {
  // state = { items: [1, 2, 3, 4, 5] };

  render() {
    // var counts = {};
    // let counter = {};

    // this.props.items.forEach(function(obj) {
    //     var key = JSON.stringify(obj)
    //     counter[key] = (counter[key] || 0) + 1
    //     const newThing = {
    //       product: obj,
    //       quantity: counter[key]
    //     }

    //     console.log(newThing)
    // })

    // debugger;
    // user id?
    // this.props.items.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
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
