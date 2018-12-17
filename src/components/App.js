import React from 'react';
import NavBar from './NavBar';
import ProductList from './ProductList';

class App extends React.Component {
  render() {
    return (
    <div className="ui container">
      <NavBar />
      <ProductList />
    </div>
    )
  }
};

export default App;