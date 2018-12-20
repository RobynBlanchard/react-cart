import React from 'react';
import './CartItem.css'

class CartItem extends React.Component {
  state = {}

  formatPrice = price => {
    const fractionalPrice = price / 100;
    return `£${fractionalPrice.toFixed(2)}`;
  }

  handleClick = (event) => {
    // this.props.updateParent(this.props.item.product);
    const operation = event.target.value;
    this.props.updateCart(this.props.item.product, operation)
    // debugger
  }

  render() {
    return(
      <div class="parent">
        <div class="child">
          <img
            src={`../assets/${this.props.item.product.imageURL}`}
            alt={this.props.imageURL}
          />
        </div>

        <div class="child">
          {this.props.item.product.title}
        </div>

        <div class="child">
        <input type="button" onClick={(e => this.handleClick(e))} value="-" /> 
          {/* <button class="button"  id="right-btn" onClick={this.handleClick} value='-'>
            <i class="minus icon" />
          </button> */}
          {this.props.item.quantity}
          <input type="button" onClick={(e => this.handleClick(e))} value="+" /> 
          {/* <button class="button"  id="left-btn" onClick={this.handleClick(this.value)} value='+'>
              <i class="plus icon" />
          </button> */}
        </div>

        <div class="child">
          {this.formatPrice(this.props.item.product.price)}
        </div>
      </div>
    )
  }
};

export default CartItem;
