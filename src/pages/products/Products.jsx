import { useEffect } from "react";
import "../../css/products-listing.css";
import { useAxios } from "../../hooks";
import { useData } from "../../context";
import { ACTION_TYPE } from "../../utils";
import { ProductsGrid } from "./ProductsGrid";
import { Filters } from "./Filters";

export const Products = () => {
  const { response, error, loading, sendRequest } = useAxios();

  const { dispatch } = useData();

  useEffect(() => {
    sendRequest({
      method: "get",
      url: "products",
    });
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
