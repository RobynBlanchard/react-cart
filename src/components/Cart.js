import React from 'react';
import CartList from './CartList';

class Cart extends React.Component {

  render() {
    return(
      <div>
        <CartList items={this.props.items}/>
      </div>
    )
  }
}

export default Cart;