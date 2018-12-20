import React from "react";
import NavBar from "./NavBar";
import Cart from "./Cart";
import ProductList from "./ProductList";
import testData from ".././testData";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  state = {
    products: testData,
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

  updateCart = product => {
    this.setState(prevState => {
      let newCart;

      prevState.cart.forEach(el => {
        if (product === el.product) {
          const newObj = {
            product,
            quantity: (el.quantity += 1)
          };
          const index = prevState.cart.indexOf(el);
          newCart = prevState.cart;
          newCart[index] = newObj;
          console.log("product already there", newCart);
          
        }
      });

      if (!newCart) {
        newCart = [...prevState.cart, { product: product, quantity: 1 }];
        console.log("new product not already there", newCart);
      }
      return { cart: newCart };
    });
  };

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
