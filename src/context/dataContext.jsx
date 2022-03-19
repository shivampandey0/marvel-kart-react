import { createContext, useContext, useReducer } from "react";
import { dataReducer } from "../reducers";

const DataContext = createContext();

const initial = {
  categories: null,
  products: null,
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initial);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
