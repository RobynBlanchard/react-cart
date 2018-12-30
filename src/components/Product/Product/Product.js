import React from "react";
import "./Product.css";
import { printPrice } from "./../../../utils";
import { USING_AWS_API, REACT_APP_AWS_ACCESS_KEY, REACT_APP_AWS_SECRET_KEY } from "../../../config";
import AWS from 'aws-sdk';

class Product extends React.Component {
  state = { image: '' };

  handleClick = event => {
    this.props.updateParent(this.props.product);
    // TODO instead of passing product pass new product with image??
  };

  componentDidMount() {
    if (USING_AWS_API) {
      const s3 = new AWS.S3({
        accessKeyId: REACT_APP_AWS_ACCESS_KEY,
        secretAccessKey: REACT_APP_AWS_SECRET_KEY,
        region: "eu-west-1",
      });

      var params = { Bucket: 'product-api-images', Key: this.props.product.imageURL };
      s3.getSignedUrl('getObject', params, (err, url) => {
        if (err) console.log(err)
        else this.setState({image: url});
      })
    } else {
      this.setState({image: `../assets/${this.props.product.imageURL}`})
    }
  }

  render() {
    return (
      <div class="ui card">
        <div class="image image">
          <img
            src={this.state.image}
            alt={this.props.imageURL}
          />
        </div>
        <div class="content">
          <span class="right floated">
            <i class="extra content" />
            {printPrice(this.props.product.price)}
          </span>
          <div class="header">{this.props.product.title}</div>
        </div>
        <div class="extra content">
          <span class="left floated plus">
            <button onClick={this.handleClick} class="something">
              <i class="plus icon" />
              Add to cart
            </button>
          </span>
          <span class="right floated star">
            <i class="star icon" />
            Favorite
          </span>
        </div>
      </div>
    );
  }
}

export default Product;
