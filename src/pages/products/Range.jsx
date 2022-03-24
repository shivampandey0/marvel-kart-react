export const PriceRange = ({ value, changeHandler }) => {
  return (
    <>
      <input
        type="range"
        min="0"
        max="1000"
        aria-label="input-range-slider"
        value={value}
        onChange={changeHandler}
        className="slider"
      />
      <div className="flex-row gap-2 my-2">
        <label className="flex-row gap-05 align-cntr">
          Min
          <input
            className="input"
            type="number"
            name="min"
            id="min"
            value={0}
            disabled
            aria-label="min-price"
          />
        </label>
        <label className="flex-row gap-05 align-cntr">
          Max
          <input
            className="input"
            type="number"
            name="max"
            max={1000}
            id="max"
            value={value}
            onChange={changeHandler}
            aria-label="min-price"
          />
        </label>
      </div>
    </>
  );
};
