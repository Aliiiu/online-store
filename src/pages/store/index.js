import React from "react";
import StoreGrid from "./storeGrid";
import StoreHeader from "./storeHeader";

const Store = () => {
  return (
    <div className="mainstore">
      <StoreHeader />
      <StoreGrid />
    </div>
  );
};

export default Store;
