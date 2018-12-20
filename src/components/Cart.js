import React from 'react';
import CartList from './CartList';

class Cart extends React.Component {

  updateCart = (product, operation) => {
    this.props.updateCart(product,operation);
  }

  render() {
    return(
      <div>
        <CartList items={this.props.items} updateCart={this.updateCart}/>
      </div>
    )
  }
}

export default Cart;