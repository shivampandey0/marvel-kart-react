import React from 'react';
import { useAuth } from '../../context';

export const CartSummary = ({ onOrder }) => {
  const { userState } = useAuth();
  const { cart } = userState.userData;

  const price = cart
    .reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    .toFixed(2);

  const discount = cart
    .reduce(
      (acc, curr) => acc + ((Number(curr.price) * curr.offer) / 100) * curr.qty,
      0
    )
    .toFixed(0);

  const deliveryCharges = 99.0;

  const total = (price - discount + deliveryCharges).toFixed(0);

  return (
    <div className='cart-summary'>
      <p className='txt-md fw-exb py-2'>Price Details</p>
      <hr />
      <div>
        <div className='flex-row justify-sb py-2'>
          <p>{`Price (${cart.length} items)`}</p>
          <p>{`₹${price}`}</p>
        </div>
        <div className='flex-row justify-sb py-2'>
          <p>Discount</p>
          <p>{`- ₹${discount}`}</p>
        </div>
        <div className='flex-row justify-sb py-2'>
          <p>Delivery Charges</p>
          <p>{`₹${deliveryCharges}`}</p>
        </div>
      </div>
      <hr />
      <div className='flex-row justify-sb py-2'>
        <p className='fw-bold'>Total Amount</p>
        <p className='fw-bold'>{`₹${total}`}</p>
      </div>
      <hr />
      <div className='py-2 txt-center'>
        You will save <span className='fw-bold'>{`₹${discount}`}</span> on this
        order
      </div>
      <button
        onClick={() => onOrder(total)}
        className='btn btn-primary btn-full'
      >
        Place Order
      </button>
    </div>
  );
};
