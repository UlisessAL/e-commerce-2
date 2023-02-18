import "../scss/ItemListContainer.scss";
const ItemListContainer = ({ products }) => {
  return (
    <>
      <swiper-slide>
        <div className="product-wrapper">
          <img src={products.thumbnail} alt={products.id} />
          <h2>${products.price}</h2>
          <p>{products.title}</p>
          <div className="button-product">
            <small>Category: {products.category}</small>
            <button className="add-to-cart">Add to cart</button>
          </div>
        </div>
      </swiper-slide>
    </>
  );
};
export default ItemListContainer;
