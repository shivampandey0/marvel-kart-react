import React from "react";
import { CartCard } from "../../components";
import { useAuth } from "../../context";
import "../../css/cart.css";
import { Address } from "./Address";
import { CartSummary } from "./CartSummary";

export const Cart = () => {
  const { userState } = useAuth();
  const { cart } = userState.userData;

  return (
    <main className="container">
      <h3 className="txt-center fw-bold my-8">My Cart</h3>
      {cart.length ? (
        <section className="cart-container">
          <div className="cart-details">
            <Address />
            {cart &&
              cart.map((product) => (
                <CartCard key={product._id} product={product} />
              ))}
          </div>
          <CartSummary />
        </section>
      ) : (
        <h3 className="txt-center fw-bold">Cart is Empty</h3>
      )}
    </main>
  );
};
