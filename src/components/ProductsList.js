import React from "react";

import Product from "./Product";
import Footer from "./Footer";

import { useCart } from "../hooks/useCart";

const ProductsList = () => {
  const { cartItems } = useCart();

  return (
    <div>
      {cartItems.length &&
        cartItems.map((product) => (
          <Product key={product.sku} product={product} />
        ))}
      <Footer productList={cartItems} />
    </div>
  );
};

export default ProductsList;
