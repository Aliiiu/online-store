import React from "react";
import StoreNav from "./storeNav";
import StoreProduct from "./storeProduct";

const StoreGrid = () => {
  return (
    <div className="storegrid">
      <StoreNav />
      <StoreProduct />
    </div>
  );
};

export default StoreGrid;
