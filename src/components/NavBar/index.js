import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './index.css';
import { getCartQuantity } from '../../reducers';

class NavBar extends React.Component {
  render() {
    return (
      <div className="ui menu">
        <Link to="/products" className="item">
          Browse products
        </Link>
        <div className="right menu">
          <Link to="/cart" className="item">
            <i className="shop icon" />
            <span label="product count">{this.props.quantity}</span>
          </Link>
          <div className="item">Favourites</div>
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
