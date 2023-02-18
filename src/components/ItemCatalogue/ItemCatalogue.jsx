import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCategory } from "../../hooks/useCategory";
import productsList from "../../mocks/productsMocks.json";
import Item from "./Item/Item";
import "../scss/ItemCatalogue.scss";
import FilterPrice from "./FilterPrice/FilterPrice";
import { useFilterPrice } from "../../hooks/useFilterPrice";

const ItemCatalogue = () => {
  let params = useParams();
  const [products] = useState(productsList.products);
  const { filterProducts } = useCategory();
  const { filterMaxPrice, maxPrice, setMaxPrice } = useFilterPrice();
  const categoryProducts = filterProducts(products, params.categoryid);
  const filteredProducts = filterMaxPrice(categoryProducts);

  return (
    <div className="div-category">
      <h2 className="title-category">
        The products are being filtred by category: {params.categoryid}
      </h2>
      <Link to="/" className="back-catalogue">
        Back to catalogue
      </Link>
      <FilterPrice maxPrice={maxPrice} setMaxPrice={setMaxPrice} />
      {filteredProducts.length === 0 ? (
        <h2 className="no-products">No se encontaron productos!</h2>
      ) : (
        <div className="category-products-wrapper">
          {filteredProducts.map((product) => (
            <Item products={product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
};
export default ItemCatalogue;
