import React from "react";
import "./CartItem.css";
import { printPrice } from "./utils";
// var aws = require('aws-sdk/dist/aws-sdk-react-native');
import AWS from 'aws-sdk';

class CartItem extends React.Component {
  state = {imageURL: ''};

  componentDidMount() {
    // async function getSignedUrl(key){
    //   return new Promise((resolve,reject) => {
    //     const s3 = new AWS.S3({
    //       accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
    //       secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
    //       region: "eu-west-1",
    //     });
    //   var params = { Bucket: 'product-api-images', Key: key };

    //     // let params = { Bucket: bucketName, Key: key };
    //     s3.getSignedUrl('getObject', params, (err, url) => {
    //       if (err) reject(err)
    //       resolve(url);
    //     })
    // });
    // }
    
    // async function process() {
    //   // for (let item of items) {
    //   const signedUrl = await getSignedUrl('bag.jpg');
    //   return signedUrl;
    //     // item.url = signedUrl;
    //   // }
    //   // return items;
    // }
    
    
    // process().then(res => {
    //   console.log(res);
    //   this.setState({image: res})
    // });
  }
    
  

  handleClick = event => {
    const operation = event.target.value;
    this.props.updateCart(this.props.item.product, operation);
  };

  render() {
    // this.getIm,age('bag.jpg');

    return (
      <div class="row">
        <div class="row-section">
          <img
            src={`../assets/${this.props.item.product.imageURL}`}
            // src={this.state.image}
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

        <div class="row-section">
          {printPrice(this.props.item.product.price * this.props.item.quantity)}
        </div>
      </div>
    );
  }
}

export default CartItem;
