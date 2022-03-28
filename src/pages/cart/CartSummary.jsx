import React from 'react'

export const CartSummary = () => {
  return (
    <div className="cart-summary">
      <p className="txt-md fw-exb py-2">Price Details</p>
      <hr />
      <div>
        <div className="flex-row justify-sb py-2">
          <p>Price (3 items)</p>
          <p>$127.00</p>
        </div>
        <div className="flex-row justify-sb py-2">
          <p>Discount</p>
          <p>-$19.00</p>
        </div>
        <div className="flex-row justify-sb py-2">
          <p>Delivery Charges</p>
          <p>$29.00</p>
        </div>
      </div>
      <hr />
      <div className="flex-row justify-sb py-2">
        <p className="fw-bold">Total Amount</p>
        <p className="fw-bold">$137.00</p>
      </div>
      <hr />
      <div className="py-2 txt-center">
        You will save <span className="fw-bold">$100</span> on this order
      </div>
      <button className="btn btn-primary btn-full">Place Order</button>
    </div>
  );
}

