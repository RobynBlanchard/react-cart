import React from 'react';
import { connect } from 'react-redux';

import ProductList from '../ProductList/ProductList';
import { fetchProducts } from '../../../actions';

class ProductListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return <ProductList products={this.props.products} />;
  }
}

const mapStateToProps = state => {
  return { products: state.products };
};

export default connect(
  mapStateToProps,
  { fetchProducts }
)(ProductListContainer);
