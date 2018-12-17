import React from 'react';

const NavBar = () => {
  return (
    <div class="ui menu">
      <a class="item">Browse products</a>
      {/* <a class="item">Submit</a> */}
      <div class="right menu">
        <a class="item"><i class="shop icon"></i></a>
        <a class="item">Favourites</a>
      </div>
    </div>
  );
};

export default NavBar;
