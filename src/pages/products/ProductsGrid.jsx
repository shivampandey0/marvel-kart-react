import { Loader } from "../../components";
import { useData } from "../../context";
import { Product } from "./Product";

export const ProductsGrid = ({ loading }) => {
  const { filteredData } = useData();
  return (
    <>
      <section className="listings-products">
        {filteredData.length === 0 ? (
          <div className="txt-center my-8">No Products Found</div>
        ) : (
          <div className="products-wrapper">
            {filteredData &&
              filteredData.map((product) => (
                <Product key={product._id} product={product} />
              ))}
          </div>
        )}
        {loading && <Loader />}
      </section>
    </>
  );
};
