import React from 'react';
import { connect } from 'react-redux';

import './ProductList.css';
import Product from '../Product/Product';
import { fetchProducts } from '../../../actions';

class ProductList extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const productList = this.props.products.map(product => {
      return <Product product={product} key={product.productID} />;
    });
    return <div className="product-list"> {productList}</div>;
  }
}

const mapStateToProps = state => {
  return { products: state.products };
};

export default connect(
  mapStateToProps,
  { fetchProducts }
)(ProductList);
