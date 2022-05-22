import { useAuth } from '../../context';

export const Orders = () => {
  const {
    userState: {
      userData: { orders },
    },
  } = useAuth();

  if (!orders.length) {
    return <div>Orders are Empty</div>;
  }

  return (
    <div>
      {orders.map(({ amount, name, delivery, orderId, products }) => {
        return (
          <div key={orderId} className='card'>
            <div className='px-2 py-2'>
              <div className='summary-main flex-column '>
                <div className='summary-left '>
                  <p className='txt-sm'>
                    <p className='h4'>Order Id :</p> <span>{orderId}</span>
                  </p>
                  <p className='txt-sm'>
                    <span className='h4'>Total Amount :</span>{' '}
                    <span>₹ {amount}</span>
                  </p>
                  <p className='h4'>Delivered to :</p>
                  <p>{name}</p>

                  <p>{delivery} ,</p>
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
                                <p className='card-description'>
                                  {categoryName}
                                </p>
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
          </div>
        );
      })}
    </div>
  );
};
