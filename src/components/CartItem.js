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
            src={`../assets/${this.props.item.imageURL}`}
            alt={this.props.imageURL}
          />
        </div>

        <div class="child">
          {this.props.item.title}
        </div>

        <div class="child">
        <button class="button"  id="left-btn">
                <i class="plus icon" />
            </button>
            1
            <button class="button"  id="right-btn">
              <i class="minus icon" />
            </button>
        </div>

        <div class="child">
          {this.formatPrice(this.props.item.price)}
        </div>
      </div>
    )
  }
};

export default CartItem;


        /* <div class="ui small image">
        <img src={require(`../assets/${this.props.item.imageURL}`)}
            alt={this.props.imageURL}></img>
        </div>
        <div class="middle aligned content">
          <div class="header">
            {this.props.item.title}
          </div>
          <div class="description">
            <p></p>
          </div>
          <div class="extra">
          <button class="button"  id="left-btn">
                <i class="plus icon" />
            </button>
            <button class="button"  id="right-btn">
              <i class="minus icon" />
            </button>
          </div>
        </div>
        <div class="middle aligned content">
        <div class="header right floated  ">
          {this.formatPrice(this.props.item.price)}
          </div>
        </div>
      </div>
    */


