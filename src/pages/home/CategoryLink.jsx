import styles from "./Home.module.css";
import { Link } from "react-router-dom";

export const CategoryLink = ({ categoryImg, categoryName }) => {
  return (
    <>
      <Link to="/products" className="flex-column flex-center">
        <img
          src={categoryImg}
          alt={categoryName}
          className={styles.home_featured}
        />
        <div className={styles.category_name}>{categoryName}</div>
      </Link>
    </>
  );
};
