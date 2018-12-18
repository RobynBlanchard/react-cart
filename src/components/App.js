import React from 'react';
import NavBar from './NavBar';
import Cart from './Cart';
import ProductList from './ProductList';
import testData from '.././testData';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends React.Component {
  state = { products: testData, cart: ['product 1', 'product 2'] };

  render() {
    return (
      <Router>
        <div className="ui container">
          <NavBar />
          <Route
            path="/products"
            render={() => <ProductList products={this.state.products} />}
          />
          <Route
            path="/cart"
            render={() => <Cart products={this.state.cart} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
