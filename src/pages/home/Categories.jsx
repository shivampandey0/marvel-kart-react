import { useEffect } from "react";
import { CategoryLink } from "./CategoryLink";
import { useAxios } from "../../hooks";
import { Loader } from "../../components";
import { useData } from "../../context";
import { ACTION_TYPE } from "../../utils";

export const Categories = () => {
  const { response, error, loading } = useAxios({
    method: "get",
    url: "categories",
  });

  const { state, dispatch } = useData();

  useEffect(() => {
    if (response) {
      dispatch({ type: ACTION_TYPE.CATEGORIES, payload: response.categories });
    }
  }, [response]);

  return (
    <>
      {state.categories &&
        state.categories.map(({ _id, categoryImage, categoryName }) => (
          <CategoryLink
            key={_id}
            categoryImg={categoryImage}
            categoryName={categoryName}
          />
        ))}

      {loading && <Loader />}
    </>
  );
};
