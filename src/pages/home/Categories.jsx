import { useState, useEffect } from "react";
import { CategoryLink } from "./CategoryLink";
import axios from "axios";

export const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("api/categories");
        setCategories(res.data.categories);
      } catch (error) {
        console.log(error);
        throw error;
      }
    })();
  }, []);

  return (
    <>
      {categories.map(({ _id, categoryImage, categoryName }) => (
        <CategoryLink
          key={_id}
          categoryImg={categoryImage}
          categoryName={categoryName}
        />
      ))}
    </>
  );
};
