import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div class="ui menu">
      <Link to="/products">
        <a class="item">Browse products</a>
      </Link>
      <div class="right menu">
        <Link to="/cart">
          <a class="item">
            <i class="shop icon" />
          </a>
        </Link>
        <a class="item">Favourites</a>
      </div>
    </div>
  );
};

export default NavBar;
