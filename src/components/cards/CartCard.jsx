import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
import { useAxios } from "../../hooks";
import { ACTION_TYPE } from "../../utils";

export const CartCard = ({ product }) => {
  const { _id, title, image, price, categoryName, qty, productType, offer } =
    product;
  const { userState, dispatchUserState } = useAuth();
  const {
    response: wishResponse,
    loading: wishLoader,
    sendRequest: wishRequest,
  } = useAxios();
  const {
    response: cartResponse,
    sendRequest: cartRequest,
    loading: cartLoader,
  } = useAxios();
  const navigate = useNavigate();

  useEffect(() => {
    if (wishResponse) {
      dispatchUserState({
        type: ACTION_TYPE.ADD_TO_WISHLIST,
        payload: wishResponse.wishlist,
      });
    }
    if (cartResponse) {
      dispatchUserState({
        type: ACTION_TYPE.ADD_TO_CART,
        payload: cartResponse.cart,
      });
    }
  }, [wishResponse, cartResponse]);

  const moveToWishlist = () => {
    checkLogin();
    const config = {
      method: "post",
      url: `user/wishlist`,
      headers: {
        authorization: userState.token,
      },
      data: {
        product,
      },
    };
    wishRequest(config);
    removeFromCart();
  };

  const removeFromCart = () => {
    checkLogin();
    const config = {
      method: "delete",
      url: `user/cart/${_id}`,
      headers: {
        authorization: userState.token,
      },
    };
    cartRequest(config);
  };

  const updateCart = (type) => {
    checkLogin();
    const config = {
      method: "post",
      url: `user/cart/${_id}`,
      headers: {
        authorization: userState.token,
      },
      data: {
        action: { type },
      },
    };
    cartRequest(config);
  };

  const checkLogin = () => {
    if (!userState.token) {
      navigate("/login");
    }
  };

  return (
    <div className="card card-h">
      <figure className="card-image">
        <img className="img-responsive" src={image} alt={title} />
      </figure>
      <div className="card-body">
        <div className="card-content">
          <div className="card-title fw-bold">{title}</div>
          <div className="card-subtitle txt-grey">{categoryName}</div>
          <small className="card-subtitle txt-grey">{productType}</small>
          <div className="quantity-container">
            <p>Qunatity:</p>
            <button
              onClick={() => updateCart("decrement")}
              className="btn"
              disabled={qty === 1 || cartLoader}
            >
              <i className="fas fa-minus"></i>
            </button>
            <input
              type="number"
              className="input quantity-count"
              value={qty}
              min="1"
              aria-label="count"
            />
            <button
              disabled={cartLoader}
              onClick={() => updateCart("increment")}
              className="btn"
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
        <div className="card-price">
          <span className="txt-sm fw-bold">{`Rs. ${price}`}</span>
          <span className="txt-sm fw-normal primary-text-color">{` (${offer}% off)`}</span>
        </div>
        <div className="card-buttons flex-column gap-05">
          <button
            disabled={wishLoader}
            onClick={moveToWishlist}
            className="btn btn-outline"
          >
            {wishLoader && <i className="fas fa-circle-notch fa-spin"></i>} Move to
            Wishlist
          </button>
        </div>
      </div>
      <div className="card-icons top-right">
        <button onClick={removeFromCart} disabled={wishLoader}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
};
