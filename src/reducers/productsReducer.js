export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return action.payload;
    case 'FETCH_IMAGE':
      return state.map(item => {
        if (item.productID !== action.payload.productID) {
          return item;
        }
        return {
          imageURL: action.payload.url,
          price: item.price,
          productID: item.productID,
          title: item.title
        };
      });

    default:
      return state;
  }
};
