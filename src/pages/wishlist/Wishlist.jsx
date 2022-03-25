import { WishCard } from "../../components";
import { useAuth } from "../../context";

export const Wishlist = () => {
  const { userState } = useAuth();
  const { wishlist } = userState.userData;
  return (
    <main className="container ">
      <h3 className="txt-center fw-bold my-8">My Wishlist</h3>
      <section className="products-wrapper">
        {wishlist &&
          wishlist.map((product) => (
            <WishCard key={product._id} product={product} />
          ))}
      </section>
    </main>
  );
};
