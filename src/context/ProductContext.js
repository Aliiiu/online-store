import React, { createContext, useState } from "react";
import { storeData } from "../service/data";
export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products] = useState(storeData);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
