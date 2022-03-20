import { createContext, useContext, useReducer } from "react";
import { filterReducer, initial } from "../reducers";
import {
  sortBy,
  inStock,
  fastDelivery,
  priceRange,
  rating,
  categories,
  productTypes,
} from "../utils";
import { useData } from "./dataContext";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initial);
  const { state: data } = useData();

  const compose =
    (...func) =>
    (state, data) =>
      func.reduce((acc, curr) => {
        return curr(state, acc);
      }, data);

  const filteredData = compose(
    sortBy,
    rating,
    inStock,
    categories,
    fastDelivery,
    productTypes,
    priceRange
  )(state, data.products);

  return (
    <FilterContext.Provider value={{ filteredData, state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilters = () => useContext(FilterContext);

export { useFilters, FilterProvider };
