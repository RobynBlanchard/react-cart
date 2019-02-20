import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';
import CartIcon from './CartIcon';

const NavBar = () => {
  return (
    <div className="ui menu">
      <Link to="/products" className="item">
        Browse products
      </Link>
      <div className="right menu">
        <CartIcon />
        <div className="item">Favourites</div>
      </div>
    </div>
  );
};

export default NavBar;
