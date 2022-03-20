import { Loader } from "../../components";
import { useFilters } from "../../context";
import { Product } from "./Product";

export const ProductsGrid = ({ loading }) => {
  const { filteredData } = useFilters();  
  return (
    <>
      <section className="listings-products">
        <div className="products-wrapper">
          {filteredData &&
            filteredData.map((product) => (
              <Product key={product._id} product={product} />
            ))}
        </div>
        {loading && <Loader />}
      </section>
    </>
  );
};
