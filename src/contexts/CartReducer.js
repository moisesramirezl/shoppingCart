const Storage = (cartItems) => {
  console.log("setting item in local storage: ", cartItems);
  localStorage.setItem(
    "shoppingCart",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};

export const sumItems = (cartItems) => {
  Storage(cartItems);
  let itemCount = cartItems.reduce(
    (total, product) => total + product.quantity,
    0
  );
  let total = cartItems
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemCount, total };
};

export const CartReducer = (state, action) => {
  switch (action.type) {
    case "DECREASE":
      return state;
    case "INCREASE":
      let tmpState = {};
      Object.assign(tmpState, state);

      const tmpCartItems = tmpState.cartItems;
      const productToUpdate = tmpCartItems.find(
        (item) => item.sku === action.payload.sku
      );

      tmpCartItems.find((item) => item.sku === action.payload.sku).quantity =
        productToUpdate.quantity + 1;

      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: tmpCartItems,
      };
    default:
      return state;
  }
};
