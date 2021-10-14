import React from "react";
import { useCart } from "../hooks/useCart";

const Product = ({ product }) => {
  const { increase } = useCart();

  const handleOnclick = (event) => {
    increase(product);
  };

  return (
    <div>
      <div>
        SKU: {product.sku} TOTAL: {product.quantity}
      </div>
      <button onClick={() => handleOnclick()}>+</button>
    </div>
  );
};

export default Product;
