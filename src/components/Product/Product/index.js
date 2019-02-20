import React from 'react';

import './index.css';
import Image from './Image';
import Content from './Content';
import Actions from './Actions';
class Product extends React.Component {
  render() {
    return (
      <div className="ui card">
        <Image
          imageURL={this.props.product.imageURL}
          title={this.props.product.title}
        />
        <Content
          price={this.props.product.price}
          title={this.props.product.title}
        />
        <Actions product={this.props.product}/>
      </div>
    );
  }
}

export default Product;
