import React from "react";

const Footer = ({ productList }) => {
  const getCartProductsQuantity = productList
    .map((prod) => prod.quantity)
    .reduce((sum, val) => sum + val, 0);
  return (
    <div>
      <div>Total: {getCartProductsQuantity}</div>
    </div>
  );
};

export default Footer;
