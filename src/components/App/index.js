import React from 'react';
import NavBar from '../NavBar';
import Cart from '../Cart/Cart';
import ProductList from '../Product/ProductList/ProductList';

import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="ui container" id="app">
          <NavBar />
          <Route path="/products" render={() => <ProductList />} />
          <Route path="/cart" render={() => <Cart />} />
        </div>
      </Router>
    );
  }
}

export default App;
