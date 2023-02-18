export const useCategory = () => {
  const filterProducts = (products, category) => {
    return products.filter((prod) => prod.category == category);
  };

  return { filterProducts };
};
