export function printPrice(price) {
  const fractionalPrice = price / 100;
  return `£${fractionalPrice.toFixed(2)}`;
}
