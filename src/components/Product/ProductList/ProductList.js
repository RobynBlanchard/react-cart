import "./ProductList.css";
import Product from "../Product/Product";
import React from "react";
import testData from "../../../testData";
import { fetchProducts } from "../../../fetchProducts";
import { USING_AWS_API } from "../../../config";

class ProductList extends React.Component {
  state = {
    products: []
  };

  componentDidMount() {
    if (USING_AWS_API) {
      const products = fetchProducts();
      products
        .then(response => {
          // Match structure of api data and mock data
          const fetchedProducts = response.data.Items.map(item => {
            return {
              imageURL: item.imageURL.S,
              price: parseInt(item.price.N),
              productID: parseInt(item.productID.N),
              title: item.title.S
            };
          });
          this.setState({ products: fetchedProducts });
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      this.setState({ products: testData });
    }
  }

  handleCartUpdate = value => {
    this.props.updateCart(value);
  };

  render() {
    const productList = this.state.products.map(product => {
      return <Product product={product} updateCart={this.handleCartUpdate} />;
    });
    return <div className="product-list"> {productList}</div>;
  }
}

export default ProductList;
