import React, { createContext } from "react";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const productsList = localStorage.getItem("shoppingCart")
    ? JSON.parse(localStorage.getItem("shoppingCart"))
    : [];

  return (
    <ProductsContext.Provider value={{ productsList }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
