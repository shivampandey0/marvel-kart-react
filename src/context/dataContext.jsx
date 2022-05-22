import { createContext, useContext, useReducer } from 'react';
import { dataReducer, initial } from '../reducers';
import {
  sortBy,
  inStock,
  fastDelivery,
  priceRange,
  rating,
  categories,
  productTypes,
  search,
} from '../utils';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initial);

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
    priceRange,
    search
  )(state.filters, state.products);

  return (
    <DataContext.Provider value={{ filteredData, state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
