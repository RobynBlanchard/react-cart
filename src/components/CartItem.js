import React from "react";
import "./CartItem.css";
import { printPrice } from "./utils";
import { USING_AWS_API, REACT_APP_AWS_ACCESS_KEY, REACT_APP_AWS_SECRET_KEY } from "../config";
import AWS from 'aws-sdk';

class CartItem extends React.Component {
  state = { image: '' };

  componentDidMount() {
    // TODO remove repitition
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
    

  handleClick = event => {
    const operation = event.target.value;
    this.props.updateCart(this.props.item.product, operation);
  };

  render() {
    return (
      <div class="row">
        <div class="row-section">
          <img
            src={this.state.image}
            alt={this.props.imageURL}
          />
        </div>

        <div class="row-section" id="title-div">
          {this.props.item.product.title}
        </div>

        <div class="row-section">
          <input type="button" onClick={e => this.handleClick(e)} value="<" />
          {this.props.item.quantity}
          <input type="button" onClick={e => this.handleClick(e)} value=">" />
        </div>

        <div class="row-section" id="price"> 
          {printPrice(this.props.item.product.price * this.props.item.quantity)}
        </div>
      </div>
    );
  }
}

export default CartItem;
