import Home from "./Home/Home";
import "../scss/Home.scss";
import { useProductsContext } from "../../context/productsContext";

const HomeContainer = () => {
  const {listOfCategories} = useProductsContext()

  return (
    <main>
      {listOfCategories.map((product) => (
        <Home products={product} key={product[0].category} />
      ))}
    </main>
  );
};
export default HomeContainer;
