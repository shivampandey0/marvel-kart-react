import { Product } from "./Product";
import { useEffect } from "react";
import "../../css/products-listing.css";
import { useAxios } from "../../hooks";
import { Loader } from "../../components";
import { useData } from "../../context";
import { ACTION_TYPE } from "../../utils";
import { ProductsGrid } from "./ProductsGrid";
import { Filters } from "./Filters";

export const Products = () => {
  const { response, error, loading } = useAxios({
    method: "get",
    url: "products",
  });

  const { state, dispatch } = useData();

  useEffect(() => {
    if (response) {
      dispatch({ type: ACTION_TYPE.PRODUCTS, payload: response.products });
    }
  }, [response]);

  return (
    <div className="listings-container">
      <Filters />
      <ProductsGrid loading={loading} products={state.products} />
    </div>
  );
};
