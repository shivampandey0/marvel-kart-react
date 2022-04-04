import { FilterInput, Fieldset } from "../../components";
import { useData } from "../../context";
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
  const { state, dispatch } = useData();
  const { filters: filterState } = state;

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
          <Fieldset title={"Price"}>
            <PriceRange
              value={filterState.priceRange}
              changeHandler={(e) =>
                dispatch({
                  type: ACTION_TYPE.PRICE_RANGE,
                  payload: e.target.value,
                })
              }
            />
          </Fieldset>

          <Fieldset title={"Sort"}>
            <FilterInput
              title="Price - Low to High"
              inputType="radio"
              className="radio"
              name={ACTION_TYPE.SORT_BY}
              checked={filterState.sortBy === LOW_HIGH_PRICE}
              changeHandler={() =>
                dispatch({
                  type: ACTION_TYPE.SORT_BY,
                  payload: LOW_HIGH_PRICE,
                })
              }
            />

            <FilterInput
              title="Price - High to Low"
              inputType="radio"
              className="radio"
              name={ACTION_TYPE.SORT_BY}
              checked={filterState.sortBy === HIGH_LOW_PRICE}
              changeHandler={() =>
                dispatch({
                  type: ACTION_TYPE.SORT_BY,
                  payload: HIGH_LOW_PRICE,
                })
              }
            />

            <FilterInput
              title="Rating - Low to High"
              inputType="radio"
              className="radio"
              name={ACTION_TYPE.SORT_BY}
              checked={filterState.sortBy === LOW_HIGH_RATING}
              changeHandler={() =>
                dispatch({
                  type: ACTION_TYPE.SORT_BY,
                  payload: LOW_HIGH_RATING,
                })
              }
            />

            <FilterInput
              title="Rating - High to Low"
              inputType="radio"
              className="radio"
              name={ACTION_TYPE.SORT_BY}
              checked={filterState.sortBy === HIGH_LOW_RATING}
              changeHandler={() =>
                dispatch({
                  type: ACTION_TYPE.SORT_BY,
                  payload: HIGH_LOW_RATING,
                })
              }
            />
          </Fieldset>

          <Fieldset title={"Product Type"}>
            {types.map(({ _id, productType }) => {
              return (
                <FilterInput
                  key={_id}
                  title={productType}
                  inputType="checkbox"
                  checked={filterState.productTypes.includes(
                    productType.toLowerCase()
                  )}
                  value={productType}
                  changeHandler={(e) =>
                    dispatch({
                      type: ACTION_TYPE.FILTER_PRODUCT_TYPES,
                      payload: e.target.value.toLowerCase(),
                    })
                  }
                />
              );
            })}
          </Fieldset>

          <Fieldset title={"Categories"}>
            {categories.map(({ _id, categoryName }) => {
              return (
                <FilterInput
                  key={_id}
                  title={categoryName}
                  inputType="checkbox"
                  className="checkbox"
                  checked={filterState.categories.includes(
                    categoryName.toLowerCase()
                  )}
                  value={categoryName}
                  changeHandler={(e) =>
                    dispatch({
                      type: ACTION_TYPE.FILTER_CATEGORIES,
                      payload: e.target.value.toLowerCase(),
                    })
                  }
                />
              );
            })}
          </Fieldset>

          <Fieldset title={"Rating"}>
            {[4, 3, 2, 1].map((item) => {
              return (
                <FilterInput
                  key={item}
                  title={`${item} Stars & above`}
                  inputType="radio"
                  className="radio"
                  name={ACTION_TYPE.RATING}
                  checked={filterState.rating === item}
                  changeHandler={() =>
                    dispatch({
                      type: ACTION_TYPE.RATING,
                      payload: item,
                    })
                  }
                />
              );
            })}
          </Fieldset>

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
