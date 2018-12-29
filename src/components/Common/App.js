import React from "react";
import NavBar from "./NavBar/NavBar";
import Cart from "../Cart/Cart";
import ProductList from "../Product/ProductList/ProductList";

import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    cart: [
      {
        product: {
          title: "A bag",
          price: 1900,
          imageURL: "bag.jpg"
        },
        quantity: 1
      }
    ]
  };

  updateCart = (product, operation = ">") => {
    this.setState(prevState => {
      let updatedCart;

      prevState.cart.forEach(el => {
        if (product === el.product) {
          if (operation === "<" && el.quantity === 1) {
            const index = prevState.cart.indexOf(el);
            updatedCart = prevState.cart;

            updatedCart.splice(index, 1);
          } else {
            const updatedProduct = {
              product,
              quantity:
                operation === "<" ? (el.quantity -= 1) : (el.quantity += 1)
            };
            const index = prevState.cart.indexOf(el);
            updatedCart = prevState.cart;
            updatedCart[index] = updatedProduct;
          }
        }
      });

      if (!updatedCart) {
        updatedCart = [...prevState.cart, { product: product, quantity: 1 }];
      }
      return { cart: updatedCart };
    });
  };

  quantityOfProducts = () => {
    const quantityObj = this.state.cart.reduce((a, b) => ({quantity: a.quantity + b.quantity}));
    return quantityObj.quantity;
  };

  render() {
    return (
      <Router>
        <div className="ui container" id="app">
          <NavBar productCount={this.quantityOfProducts()}/>
          <Route
            path="/products"
            render={() => (
              <ProductList
                updateCart={this.updateCart}
              />
            )}
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
