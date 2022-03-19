import { Loader } from "../../components";
import { Product } from "./Product";

export const ProductsGrid = ({ loading, products }) => {
  return (
    <>
      <section className="listings-products">
        <div className="products-wrapper">
          {products &&
            products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
        </div>
        {loading && <Loader />}
      </section>
    </>
  );
};
