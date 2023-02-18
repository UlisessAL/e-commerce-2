import ItemListContainer from "../../ItemListContainer/ItemListContainer";
import { useEffect, useRef, useState } from "react";
import { register } from "swiper/element/bundle";
import { Link } from "react-router-dom";
import { useWidthWindow } from "../../../hooks/useWidthWindow";

register();

const Home = ({ products }) => {

  const {count} = useWidthWindow();

  console.log(count);

  const swiperElRef = useRef(null);

  const categoryProduct = products[0].category;
  return (
    <>
      <h3>Category: {categoryProduct} - <Link to={`/category/${categoryProduct}`}>Ver más</Link></h3>
      <div className="carousel-wrapper">
        <swiper-container
          ref={swiperElRef}
          slides-per-view={count}
          navigation="true"
          pagination="true"
        >
          {products.slice(0, 10).map((el) => (
            <ItemListContainer products={el} key={el.id} />
          ))}
        </swiper-container>
      </div>
    </>
  );
};
export default Home;
