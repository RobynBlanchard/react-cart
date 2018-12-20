import React from 'react';
import NavBar from './NavBar';
import Cart from './Cart';
import ProductList from './ProductList';
import testData from '.././testData';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends React.Component {
  state = {
    products: testData,
    cart: [{
      product: {
        title: 'A bag',
        price: 1900,
        imageURL: 'bag.jpg'
      },
      quantity: 0
      }]
  };

  updateCart = value => {
    const present = this.state.cart.indexOf(value)
    if (present) {
      this.setState(prevState => ({
        ...prevState.cart.value.quantity += 1
      }));
    }

    this.setState(prevState => ({
      cart: [...prevState.cart, {product: value, quantity: 1}]
    }));
    console.log(this.state.cart)
  };
  // TO Continue

  render() {
    return (
      <Router>
        <div className="ui container">
          <NavBar />
          <Route
            path="/products"
            render={() => (
              <ProductList
                products={this.state.products}
                updateCart={this.updateCart}
              />
            )}
          />
          <Route path="/cart" render={() => <Cart items={this.state.cart} />} />
        </div>
      </Router>
    );
  }
}

export default App;
