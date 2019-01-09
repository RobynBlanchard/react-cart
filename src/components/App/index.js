import React from "react";
import NavBar from "../NavBar";
import Cart from "../Cart/Cart";
import ProductList from "../Product/ProductList/ProductList";

import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    cart: [],
    totalPrice: 0
  };

  quantityOfProducts = cart => {
    if (cart.length === 0) {
      return 0;
    }
    const quantityObj = cart.reduce((a, b) => ({
      quantity: a.quantity + b.quantity
    }));
    return quantityObj.quantity;
  };

  updateCartItems = ({ cart }, product, operation) => {
    let index = cart
      .map(function(e) {
        return e.product;
      })
      .indexOf(product);

    if (index === -1) {
      return [...cart, { product: product, quantity: 1 }];
    }
    if (operation === "<" && cart[index].quantity === 1) {
      return cart.filter(item => item.product !== product);
    }
    return cart.map(item => {
      if (item.product !== product) {
        return item
      }
      return {
          product,
          quantity: item.quantity + (operation === "<" ? -1 : 1)
        }
    });
  };

  handleCartUpdate = (product, operation = ">") => {
    this.setState(prevState => {
      const updatedCart = this.updateCartItems(prevState, product, operation);

      return {
        cart: updatedCart,
        totalPrice: this.quantityOfProducts(updatedCart)
      };
    });
  };

  render() {
    return (
      <Router>
        <div className="ui container" id="app">
          <NavBar productCount={this.state.totalPrice} />
          <Route
            path="/products"
            render={() => <ProductList updateCart={this.handleCartUpdate} />}
          />
          <Route
            path="/cart"
            render={() => (
              <Cart items={this.state.cart} updateCart={this.handleCartUpdate} />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
