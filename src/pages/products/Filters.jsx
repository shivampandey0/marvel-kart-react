import { FilterInput } from "../../components";
import { useFilters } from "../../context";
import { PriceRange } from "./Range";
import {
  ACTION_TYPE,
  HIGH_LOW_PRICE,
  HIGH_LOW_RATING,
  LOW_HIGH_PRICE,
  LOW_HIGH_RATING,
} from "../../utils";
import { types } from "../../backend/db/types";
import { categories } from "../../backend/db/categories";

export const Filters = () => {
  const { state: filterState, dispatch } = useFilters();

  return (
    <>
      <aside className="listings-filters">
        {/* Filters Header  */}
        <div className="filter-header">
          <h3 className="fw-bold">Filters</h3>
          <button
            className="btn btn-link"
            onClick={() => dispatch({ type: ACTION_TYPE.CLEAR })}
          >
            Clear
          </button>
        </div>
        {/* Filters Group */}
        <section className="filters-group">
          <PriceRange
            value={filterState.priceRange}
            changeHandler={(e) =>
              dispatch({
                type: ACTION_TYPE.PRICE_RANGE,
                payload: e.target.value,
              })
            }
          />

          <fieldset className="my-2">
            <legend className="fw-bold">Sort</legend>

            <FilterInput
              // key={_id}
              title="Price - Low to High"
              inputType="radio"
              className="radio"
              name={ACTION_TYPE.SORT_BY}
              checked={filterState.sortBy === LOW_HIGH_PRICE}
              // value={LOW_HIGH_PRICE}
              changeHandler={(e) =>
                dispatch({
                  type: ACTION_TYPE.SORT_BY,
                  payload: LOW_HIGH_PRICE,
                })
              }
            />

            <FilterInput
              // key={_id}
              title="Price - High to Low"
              inputType="radio"
              className="radio"
              name={ACTION_TYPE.SORT_BY}
              checked={filterState.sortBy === HIGH_LOW_PRICE}
              // value={LOW_HIGH_PRICE}
              changeHandler={(e) =>
                dispatch({
                  type: ACTION_TYPE.SORT_BY,
                  payload: HIGH_LOW_PRICE,
                })
              }
            />

            <FilterInput
              // key={_id}
              title="Rating - Low to High"
              inputType="radio"
              className="radio"
              name={ACTION_TYPE.SORT_BY}
              checked={filterState.sortBy === LOW_HIGH_RATING}
              // value={LOW_HIGH_PRICE}
              changeHandler={(e) =>
                dispatch({
                  type: ACTION_TYPE.SORT_BY,
                  payload: LOW_HIGH_RATING,
                })
              }
            />

            <FilterInput
              // key={_id}
              title="Rating - High to Low"
              inputType="radio"
              className="radio"
              name={ACTION_TYPE.SORT_BY}
              checked={filterState.sortBy === HIGH_LOW_RATING}
              // value={LOW_HIGH_PRICE}
              changeHandler={(e) =>
                dispatch({
                  type: ACTION_TYPE.SORT_BY,
                  payload: HIGH_LOW_RATING,
                })
              }
            />
          </fieldset>

          <fieldset className="my-2">
            <legend className="fw-bold">Product Type</legend>

            {types.map(({ _id, productType }) => {
              return (
                <FilterInput
                  key={_id}
                  title={productType}
                  inputType="checkbox"
                  // name={name}
                  checked={filterState.productTypes.some(
                    (item) => item === productType.toLowerCase()
                  )}
                  value={productType}
                  changeHandler={(e) =>
                    dispatch({
                      type: ACTION_TYPE.PRODUCT_TYPE,
                      payload: e.target.value.toLowerCase(),
                    })
                  }
                />
              );
            })}
          </fieldset>

          <fieldset className="my-2">
            <legend className="fw-bold">Categories</legend>

            {categories.map(({ _id, categoryName }) => {
              return (
                <FilterInput
                  key={_id}
                  title={categoryName}
                  inputType="checkbox"
                  checked={filterState.categories.some(
                    (item) => item === categoryName.toLowerCase()
                  )}
                  value={categoryName}
                  changeHandler={(e) =>
                    dispatch({
                      type: ACTION_TYPE.CATEGORIES,
                      payload: e.target.value.toLowerCase(),
                    })
                  }
                />
              );
            })}
          </fieldset>

          <fieldset className="my-2">
            <legend className="fw-bold">Rating</legend>

            <FilterInput
              // key={_id}
              title="4 Stars &amp; above"
              inputType="radio"
              className="radio"
              name={ACTION_TYPE.RATING}
              checked={filterState.rating === 4}
              changeHandler={(e) =>
                dispatch({
                  type: ACTION_TYPE.RATING,
                  payload: 4,
                })
              }
            />

            <FilterInput
              // key={_id}
              title="3 Stars &amp; above"
              inputType="radio"
              className="radio"
              name={ACTION_TYPE.RATING}
              checked={filterState.rating === 3}
              // value={LOW_HIGH_PRICE}
              changeHandler={(e) =>
                dispatch({
                  type: ACTION_TYPE.RATING,
                  payload: 3,
                })
              }
            />

            <FilterInput
              // key={_id}
              title="2 Stars &amp; above"
              inputType="radio"
              className="radio"
              name={ACTION_TYPE.RATING}
              checked={filterState.rating === 2}
              // value={LOW_HIGH_PRICE}
              changeHandler={(e) =>
                dispatch({
                  type: ACTION_TYPE.RATING,
                  payload: 2,
                })
              }
            />

            <FilterInput
              // key={_id}
              title="1 Stars &amp; above"
              inputType="radio"
              className="radio"
              name={ACTION_TYPE.RATING}
              checked={filterState.rating === 1}
              // value={LOW_HIGH_PRICE}
              changeHandler={(e) =>
                dispatch({
                  type: ACTION_TYPE.RATING,
                  payload: 1,
                })
              }
            />
          </fieldset>

          <FilterInput
            title="Include out of stock"
            inputType="checkbox"
            checked={filterState.inStock}
            changeHandler={(e) =>
              dispatch({
                type: ACTION_TYPE.STOCK,
                payload: e.target.checked,
              })
            }
          />
          <FilterInput
            title="Fast Delivery Only"
            inputType="checkbox"
            checked={filterState.fastDelivery}
            changeHandler={(e) =>
              dispatch({
                type: ACTION_TYPE.FAST_DELIVERY,
                payload: e.target.checked,
              })
            }
          />
        </section>
      </aside>
    </>
  );
};
