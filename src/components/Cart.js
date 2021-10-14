import React from "react";

import ProductsList from "./ProductsList";

import ProductContextProvider from "./../contexts/ProductContext";
import CartContextProvider from "./../contexts/CartContext";

const Cart = () => {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <ProductsList />
      </CartContextProvider>
    </ProductContextProvider>
  );
};

export default Cart;
