import { useEffect } from "react";
import "../../css/products-listing.css";
import { useAxios } from "../../hooks";
import { useData } from "../../context";
import { ACTION_TYPE } from "../../utils";
import { ProductsGrid } from "./ProductsGrid";
import { Filters } from "./Filters";
import { useLocation } from "react-router-dom";

export const Products = () => {
  const { response, loading, sendRequest } = useAxios();
  const { dispatch } = useData();

  const location = useLocation();

  useEffect(() => {
    sendRequest({
      method: "get",
      url: "products",
    });
    if (location.state) {
      dispatch({
        type: ACTION_TYPE.FILTER_CATEGORIES,
        payload: location.state.category.toLowerCase(),
      });
    }
  }, []);

  useEffect(() => {
    if (response) {
      dispatch({ type: ACTION_TYPE.PRODUCTS, payload: response.products });
    }
  }, [response]);

  return (
    <div className="listings-container">
      <Filters />
      <ProductsGrid loading={loading} />
    </div>
  );
};
