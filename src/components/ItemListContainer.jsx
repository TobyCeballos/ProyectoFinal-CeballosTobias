import React, { useState } from "react";
import ProductCard from "./shared/ProductCard";

const ItemListContainer = ({productsData }) => {
  return (
    <div className="w-full flex flex-wrap justify-center">
      {productsData.map((product) => {
        return <ProductCard key={product.id} productData={product} />;
      })}
    </div>
  );
};

export default ItemListContainer;
