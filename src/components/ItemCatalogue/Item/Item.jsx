const Item = ({ products }) => {
  const { title, price, thumbnail, id } = products;

  return (
    <>
      <div className="category-product-wrapper">
        <img src={thumbnail} alt={id} />
        <h2>${price}</h2>
        <p>{title}</p>
        <div className="div-button">
          <button>Add to cart</button>
        </div>
      </div>
    </>
  );
};
export default Item;
