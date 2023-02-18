import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeContainer from "./components/HomeContainer/HomeContainer";
import ItemCatalogue from "./components/ItemCatalogue/ItemCatalogue";
import { MaxPriceProvider } from "./context/maxPriceContext";
import { ProductsProvider } from "./context/productsContext";

function App() {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <MaxPriceProvider>
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/category/:categoryid" element={<ItemCatalogue />} />
          </Routes>
        </MaxPriceProvider>
      </ProductsProvider>
    </BrowserRouter>
  );
}

export default App;
