import "./ProductList.css";
import Product from "./Product";
import React from "react";

class ProductList extends React.Component {
  updateParent = value => {
    this.props.updateCart(value);
  };

  render() {
    const images = this.props.products.map(product => {
      return <Product product={product} updateParent={this.updateParent} />;
    });
    return <div className="product-list"> {images}</div>;
  }
}

export default ProductList;
