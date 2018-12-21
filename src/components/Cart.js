import React from 'react';
import CartList from './CartList';
import CartSummary from './CartSummary';

class Cart extends React.Component {

  updateCart = (product, operation) => {
    this.props.updateCart(product,operation);
  }

  totalPrice = () => {
    let sum = 0;
    this.props.items.forEach(item => {
      sum += item.product.price * item.quantity
    });
    return sum
  }

  render() {
    return(
      <div>
        <CartList items={this.props.items} updateCart={this.updateCart}/>
        <CartSummary totalPrice={this.totalPrice()} />
      </div>
    )
  }
}

export default Cart;