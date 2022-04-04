import { Link } from "react-router-dom";

export const CategoryLink = ({ categoryImg, categoryName }) => {
  return (
    <>
      <Link
        to="/products"
        className="flex-column flex-center"
        state={{ category: categoryName }}
      >
        <img
          src={categoryImg}
          alt={categoryName}
          className='home_featured'
        />
        <div className='category_name'>{categoryName}</div>
      </Link>
    </>
  );
};
