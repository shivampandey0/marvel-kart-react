import { Link, useLocation } from 'react-router-dom';
import '../../css/order-summary.css';

export const OrderSummary = () => {
  const { state } = useLocation();

  const { amount, name, delivery, mobile, orderId, paymentId, products } =
    state;

  return (
    <div className='summary-wrapper'>
      {paymentId ? (
        <>
          <h3>Order Summary</h3>
          <div className='summary-container'>
            <h3 className='summary-header '>Order Confirmed</h3>
            <div className='summary-main'>
              <div className='summary-left'>
                <p className='txt-sm'>
                  Order Id : <span>{orderId}</span>
                </p>
                <p className='txt-sm'>
                  Payment Id : <span>{paymentId}</span>
                </p>
                <p className='txt-sm'>
                  Total Amount : <span>₹ {amount}</span>
                </p>
                <div>
                  <p className='h4'>Order will be delivered to :</p>
                  <p>{name}</p>

                  <p>{delivery} ,</p>

                  <p>Phone Number : {mobile}</p>
                </div>
              </div>
              <div className='summary-right'>
                {products.map(
                  ({ _id, image, title, categoryName, price, qty }) => (
                    <div key={_id} className='card card-h my-2'>
                      <figure className='card-image'>
                        <img
                          className='img-responsive'
                          src={image}
                          alt={title}
                        />
                      </figure>
                      <div className='card-body'>
                        <div className='card-content'>
                          <div className='card-title'>
                            <div>
                              <h4>{title}</h4>
                              <p className='card-description'>{categoryName}</p>
                            </div>
                          </div>
                          <div className='price'>
                            <p>Total Quantity : {qty}</p>
                            <p>Price : ₹ {price}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h3 className='order-msg'>Looks like your order is empty.</h3>
          <Link to='/products'>
            <button className='btn-link'>Shop Now</button>
          </Link>
        </>
      )}
    </div>
  );
};
