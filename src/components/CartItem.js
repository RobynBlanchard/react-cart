import React from 'react';
import './CartItem.css'

class CartItem extends React.Component {
  state = {}

  formatPrice = price => {
    const fractionalPrice = price / 100;
    return `£${fractionalPrice.toFixed(2)}`;
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
        <button class="button"  id="left-btn">
                <i class="plus icon" />
            </button>
            {this.props.item.quantity}
            <button class="button"  id="right-btn">
              <i class="minus icon" />
            </button>
        </div>

        <div class="child">
          {this.formatPrice(this.props.item.product.price)}
        </div>
      </div>
    )
  }
};

export default CartItem;
