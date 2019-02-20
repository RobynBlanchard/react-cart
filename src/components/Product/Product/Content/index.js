import React from 'react';
import './index.css';
import { printPrice } from './../../../../utils';

const Content = ({ price, title }) => {
  return (
    <div className="content">
      <span className="right floated">
        <i className="extra content" />
        {printPrice(price)}
      </span>
      <div className="header">{title}</div>
    </div>
  );
};

export default Content;
