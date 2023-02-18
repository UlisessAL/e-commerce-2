import { createContext, useContext } from "react";
import { useState } from "react";
import { useCategory } from "../hooks/useCategory";
import productsList from "../mocks/productsMocks.json";

export const ProductsContext = createContext();

export const useProductsContext = () => {
  const context = useContext(ProductsContext);

  return context;
};

export function ProductsProvider({ children }) {
  const [products] = useState(productsList.products);

  const { filterProducts } = useCategory();

  const smartphonesCategory = filterProducts(products, "smartphones");
  const laptopCategory = filterProducts(products, "laptops");
  const fragnancesCategory = filterProducts(products, "fragrances");
  const skincareCategory = filterProducts(products, "skincare");

  const listOfCategories = [
    smartphonesCategory,
    laptopCategory,
    fragnancesCategory,
    skincareCategory,
  ];

  return (
    <ProductsContext.Provider value={{ listOfCategories }}>
      {children}
    </ProductsContext.Provider>
  );
}
