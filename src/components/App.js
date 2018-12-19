import React from 'react';
import NavBar from './NavBar';
import Cart from './Cart';
import ProductList from './ProductList';
import testData from '.././testData';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends React.Component {
  state = { products: testData, cart: [{title: 'A bag', price:1900, imageURL:'bag.jpg'}] };

  updateCart = (value) => {
    this.setState(prevState => ({
      cart: [...prevState.cart, value]
    }))
  }

  render() {
    return (
      <Router>
        <div className="ui container">
          <NavBar />
          <Route
            path="/products"
            render={() => <ProductList products={this.state.products} updateCart={this.updateCart}/>}
          />
          <Route
            path="/cart"
            render={() => <Cart items={this.state.cart}/>}
          />
        </div>
      </Router>
    );
  }
}

export default App;
