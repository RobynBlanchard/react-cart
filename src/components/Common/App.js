import React from "react";
import NavBar from "./NavBar/NavBar";
import Cart from "../Cart/Cart";
import ProductList from "../Product/ProductList/ProductList";

import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    cart: []
  };

  updateCart = (product, operation = ">") => {
    this.setState(prevState => {
      let updatedCart = prevState.cart;

      let index = prevState.cart
        .map(function(e) {
          return e.product;
        })
        .indexOf(product);

      if (index === -1) {
        updatedCart.push({ product: product, quantity: 1 })
      } else {
        if (operation === "<" && updatedCart[index].quantity === 1) {
          updatedCart.splice(index, 1);
        } else {
          updatedCart[index] = {
            product,
            quantity: updatedCart[index].quantity + (operation === "<" ? -1 : 1)
          };
        }
      }

      return { cart: updatedCart };
    });
  };

  quantityOfProducts = () => {
    if (this.state.cart.length === 0) {
      return 0;
    }
    const quantityObj = this.state.cart.reduce((a, b) => ({
      quantity: a.quantity + b.quantity
    }));
    return quantityObj.quantity;
  };

  render() {
    return (
      <Router>
        <div className="ui container" id="app">
          <NavBar productCount={this.quantityOfProducts()} />
          <Route
            path="/products"
            render={() => <ProductList updateCart={this.updateCart} />}
          />
          <Route
            path="/cart"
            render={() => (
              <Cart items={this.state.cart} updateCart={this.updateCart} />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
