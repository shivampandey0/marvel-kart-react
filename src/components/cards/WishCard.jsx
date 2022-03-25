import { useAuth } from "../../context";
import "../../css/card.css";
import { useAxios } from "../../hooks";
import { ACTION_TYPE } from "../../utils";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const WishCard = ({ product }) => {
  const {
    _id,
    title,
    image,
    price,
    categoryName,
    productType,
    inStock,
    fastDelivery,
    rating,
    offer,
  } = product;

  const { inWishList, userState, dispatchUserState } = useAuth();
  const { response, loading, sendRequest } = useAxios();

  const navigate = useNavigate();

  useEffect(() => {
    if (response) {
      dispatchUserState({
        type: ACTION_TYPE.ADD_TO_WISHLIST,
        payload: response.wishlist,
      });
    }
  }, [response]);

  const wishClickHandler = () => {
    if (!userState.token) {
      navigate("/login");
      // return;
    }
    const config = {
      method: "post",
      url: "user/wishlist",
      headers: {
        authorization: userState.token,
      },
    };
    if (inWishList(_id)) {
      config.method = "delete";
      config.url = `${config.url}/${_id}`;
    } else {
      config.data = { product };
    }
    sendRequest(config);
  };

  return (
    <div className="card product-card">
      {!inStock && (
        <div className="card-overlay">
          <p className="overlay-text">Out Of Stock</p>
        </div>
      )}

      <figure className="card-image">
        <img className="img-responsive" src={image} alt={title} />
      </figure>
      <div className="card-body flex-column gap-05">
        <div className="card-title fw-bold">{title}</div>
        <div className="card-subtitle txt-grey">{categoryName}</div>
        <small className="card-subtitle txt-grey">{productType}</small>
      </div>
      <div className="card-content flex-row justify-sb align-cntr">
        <span className="badge-info card-badge txt-sm">
          {rating.starRating} <i className="fas fa-star mx-1" />{" "}
        </span>
        {fastDelivery && (
          <span>
            <i className="fas fa-truck secondary-text-color"></i>
          </span>
        )}
      </div>
      <div className="card-price">
        <span className="txt-sm fw-bold">{`Rs.${price} `}</span>
        <span className="txt-sm fw-normal primary-text-color">{` (${offer}% off)`}</span>
      </div>
      <div className="card-buttons flex-column gap-05">
        <button className="btn btn-primary">Add to cart</button>
        {/* <button className="btn btn-outline">Buy Now</button> */}
      </div>
      <div className="card-icons top-right">
        <button onClick={wishClickHandler}>
          {loading ? (
            <i className="fas fa-circle-notch fa-spin"></i>
          ) : (
            <i
              className={`fas fa-heart icon ${
                inWishList(_id) && "primary-text-color"
              } `}
            />
          )}
        </button>
      </div>
      {/* <span className="badge badge-info card-badge top-left">New</span> */}
    </div>
  );
};
