import React from 'react';

class Cart extends React.Component {
  render() {
    return(
      <div>
        Cart {this.props.products}
      </div>
    )
  }
}

export default Cart;