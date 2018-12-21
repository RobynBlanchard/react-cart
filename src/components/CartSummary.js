import React from 'react'

const printPrice = price => {
  const fractionalPrice = price / 100;
  return `£${fractionalPrice.toFixed(2)}`;
};

const CartSummary = (props) => {
  return (
    <div>
      {printPrice(props.totalPrice)}
    </div>
  )
}

export default CartSummary