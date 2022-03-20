export const Product = ({ product }) => {
  const {
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

  // const finalPrice = Number(price) - (Number(price) * offer) / 100;
  return (
    <>
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
          <button className="btn btn-outline">Buy Now</button>
        </div>
        <div className="card-icons top-right">
          <button>
            <i className="fas fa-heart icon"></i>
          </button>
        </div>
        {/* <span className="badge badge-info card-badge top-left">New</span> */}
      </div>
    </>
  );
};
