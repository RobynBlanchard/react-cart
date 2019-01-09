import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const NavBar = (props) => {
  return (
    <div class="ui menu">
      <Link to="/products">
        <a class="item">Browse products</a>
      </Link>
      <div class="right menu">
        <Link to="/cart">
          <a class="item">
            <i class="shop icon" /><span label="product count">{props.productCount}</span>
          </a>
        </Link>
        <a class="item">Favourites</a>
      </div>
    </div>
  );
};

export default NavBar;
