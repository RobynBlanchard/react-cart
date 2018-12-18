import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const NavBar = () => {
  return (
    // <Router>
    <div class="ui menu">
      <Link to="/products"><a class="item">Browse products</a></Link>
      <div class="right menu">
      <Link to="/cart"><a class="item"><i class="shop icon"></i></a></Link>
        <a class="item">Favourites</a>
      </div>

    </div>
    // </Router>
  );
};

export default NavBar;


