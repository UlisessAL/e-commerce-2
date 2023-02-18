import { useState } from "react";
import productsList from "../mocks/productsMocks.json";
import { useCategory } from "./useCategory";

export const useProducts = () => {
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

  console.log(listOfCategories);

  return listOfCategories;
};
