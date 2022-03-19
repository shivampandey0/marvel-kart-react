export const Filters = () => {
  return (
    <>
      <aside className="listings-filters">
        {/* Filters Header  */}
        <div className="filter-header">
          <h3 className="fw-bold">Filters</h3>
          <button className="btn btn-link">Clear</button>
        </div>
        {/* Filters Group */}
        <section className="filters-group">
          <div className="slider-container">
            <h4 className="fw-exb">Price</h4>
            <input
              type="range"
              min="0"
              max="10000"
              aria-label="input-range-slider"
              step="2500"
              value="2500"
              list="tickmarks"
              className="slider"
            />
            <datalist id="tickmarks">
              <option value="0"></option>
              <option value="2500"></option>
              <option value="5000"></option>
              <option value="7500"></option>
              <option value="10000"></option>
            </datalist>
          </div>

          <div className="category-filter my-2">
            <h4 className="fw-exb">Categories</h4>
            <ul className="py-2 px-2">
              <li className="filter-list-item">
                <input type="checkbox" name="category" id="action-figures" />
                <label for="action-figures">Action Figures</label>
              </li>
              <li className="filter-list-item">
                <input type="checkbox" name="category" id="bags" />
                <label for="bags">Bags</label>
              </li>
              <li className="filter-list-item">
                <input type="checkbox" name="category" id="costumes" />
                <label for="costumes">Costumes</label>
              </li>
              <li className="filter-list-item">
                <input type="checkbox" name="category" id="t-shirts" />
                <label for="t-shirts">T-Shirts &amp; Tops</label>
              </li>
            </ul>
          </div>

          <div className="rating-filter my-2">
            <h4 className="fw-exb">Ratings</h4>

            <ul className="py-2 px-2">
              <li className="filter-list-item">
                <input type="radio" className="radio" name="review" id="review-4" />
                <label for="review-4">4 Stars &amp; above</label>
              </li>
              <li className="filter-list-item">
                <input type="radio" className="radio" name="review" id="review-3" />
                <label for="review-3">3 Stars &amp; above</label>
              </li>
              <li className="filter-list-item">
                <input type="radio" className="radio" name="review" id="review-2" />
                <label for="review-2">2 Stars &amp; above</label>
              </li>
              <li className="filter-list-item">
                <input type="radio" className="radio" name="review" id="review-1" />
                <label for="review-1">1 Stars &amp; above</label>
              </li>
            </ul>
          </div>

          <div className="sort-filter my-2">
            <h4 className="fw-exb">Sort by</h4>
            <ul className="px-2 py-2">
              <li className="filter-list-item">
                <input type="radio" className="radio" name="sort" id="low-high" />
                <label for="low-high">Price - Low to High</label>
              </li>
              <li className="filter-list-item">
                <input type="radio" className="radio" name="sort" id="high-low" />
                <label for="high-low">Price - High to Low</label>
              </li>
            </ul>
          </div>
        </section>
      </aside>
    </>
  );
};
