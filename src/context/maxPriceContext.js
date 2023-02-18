import { createContext, useContext, useState } from "react";

export const MaxPriceContext = createContext();

export const useMaxPriceContext = () => {
  const context = useContext(MaxPriceContext);
  return context;
};

export function MaxPriceProvider({ children }) {
  const [maxPrice, setMaxPrice] = useState(3000);
  return (
    <MaxPriceContext.Provider value={{ maxPrice, setMaxPrice }}>
      {children}
    </MaxPriceContext.Provider>
  );
}
