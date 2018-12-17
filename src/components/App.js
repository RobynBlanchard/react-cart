import React from 'react';
import NavBar from './NavBar';
import ProductList from './ProductList';
import testData from '.././testData';
import './App.css';

class App extends React.Component {

  state = { products: testData };

  render() {
    return (
    <div className="ui container">
      <NavBar />
      <ProductList products={this.state.products}/>
    </div>
    )
  }
};

export default App;