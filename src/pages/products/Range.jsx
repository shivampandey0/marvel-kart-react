export const PriceRange = ({ value, changeHandler }) => {
  return (
    <div className="slider-container">
      <h4 className="fw-exb">Price</h4>
      <input
        type="range"
        min="0"
        max="1000"
        aria-label="input-range-slider"
        step="250"
        value={value}
        onChange={changeHandler}
        list="tickmarks"
        className="slider"
      />
      <datalist id="tickmarks">
        <option value="0"></option>
        <option value="250"></option>
        <option value="500"></option>
        <option value="750"></option>
        <option value="1000"></option>
      </datalist>
    </div>
  );
};
