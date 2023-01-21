import React, { createContext, useState } from "react";

export const ProductsContext = createContext([]);

const productsData = [
  {
    id: "addidasid",
    title: "Adidas",
  },
  {
    id: "bogolanid",
    title: "Bogolan",
  },
  {
    id: "yeezyid",
    title: "Yeezy",
  },
];

const similarProductsData = [
  {
    id: "faligalakaid",
    title: "Fali galaka",
  },
  {
    id: "yoroid",
    title: "Yoro",
  },
  {
    id: "dampeid",
    title: "Dampe",
  },
];

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);
  const [similarProducts, setSimilarProducts] = useState(similarProductsData);

  const getProduct = (productId) => {
    return (
      products.find(({ id }) => id === productId) ||
      similarProducts.find(({ id }) => id === productId)
    );
  };

  const value = {
    products,
    similarProducts,
    getProduct,
  };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
