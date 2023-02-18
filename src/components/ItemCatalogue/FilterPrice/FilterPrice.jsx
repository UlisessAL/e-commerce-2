import { useId } from "react";

const FilterPrice = ({ maxPrice, setMaxPrice }) => {
  const priceId = useId();
  const handleChangePrice = (e) => {
    setMaxPrice(e.target.value);
  };

  return (
    <div className="max-price-div">
      <span>Filter by max price</span>
      <label htmlFor={priceId}></label>
      <input
        type="range"
        min={100}
        max={3000}
        value={maxPrice}
        onChange={handleChangePrice}
      />
      <span> ${maxPrice}</span>
    </div>
  );
};
export default FilterPrice;
