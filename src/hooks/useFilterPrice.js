import { useMaxPriceContext } from "../context/maxPriceContext";

export const useFilterPrice = () => {
  const { maxPrice, setMaxPrice } = useMaxPriceContext();

  const filterMaxPrice = (products) => {
    return products.filter((product) => {
      return product.price <= maxPrice;
    });
  };

  return { setMaxPrice, maxPrice, filterMaxPrice };
};
