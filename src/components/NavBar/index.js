import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './index.css';
import { getCartQuantity } from '../../reducers';

class NavBar extends React.Component {
  render() {
    return (
      <div class="ui menu">
        <Link to="/products">
          <a class="item">Browse products</a>
        </Link>
        <div class="right menu">
          <Link to="/cart">
            <a class="item">
              <i class="shop icon" />
              <span label="product count">{this.props.quantity}</span>
            </a>
          </Link>
          <a class="item">Favourites</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { quantity: getCartQuantity(state) };
};

export default connect(
  mapStateToProps,
  null
)(NavBar);
