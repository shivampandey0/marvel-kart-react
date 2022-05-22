import { CartCard } from '../../components';
import { useAuth } from '../../context';
import '../../css/cart.css';
import { Address } from './Address';
import { CartSummary } from './CartSummary';
import { v4 as uuid } from 'uuid';
// import { useAxios } from '../../hooks';
// import { useEffect } from 'react';
import { ACTION_TYPE, emptyCart } from '../../utils';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const {
    userState: { token, userData },
    dispatchUserState,
  } = useAuth();
  const { cart, address } = userData;
  const defaultAddress = address?.find((adr) => adr.default);
  // const { response, sendRequest } = useAxios();
  const navigate = useNavigate();

  // const emptyCart = () => {
  //   const config = {
  //     method: 'delete',
  //     url: `user/cart`,
  //     headers: {
  //       authorization: token,
  //     },
  //   };
  //   sendRequest(config);
  // };

  // useEffect(() => {
  //   if (response) {
  //     dispatchUserState({
  //       type: ACTION_TYPE.ADD_TO_CART,
  //       payload: response.cart,
  //     });
  //   }
  // }, [response]);

  // const emptyCart = async () => {
  //   try {
  //     const { data } = await axios.delete('/user/cart', {
  //       headers: { authorization: token },
  //     });
  //     console.log(data);
  //     dispatchUserState({
  //       type: ACTION_TYPE.ADD_TO_CART,
  //       payload: data.cart,
  //     });
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // };

  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async ({ amount }) => {
    console.log(amount);
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );

    if (!res) {
      alert('Razorpay SDK failed to load, check you connection');
      return;
    }

    const orderAddress =
      defaultAddress &&
      ` ${defaultAddress?.street} ${defaultAddress?.city},${defaultAddress?.state}, ${defaultAddress?.zipCode}`;

    const options = {
      key: 'rzp_test_5StHCHiRhXsWjs',
      amount: amount * 100,
      currency: 'INR',
      name: 'Marvel Kart',
      description: 'Thank you for shopping with us',
      image: 'https://marvel-kart.netlify.app/logo192.png',
      handler: async (response) => {
        const orderId = uuid();
        const orderData = {
          orderId,
          products: [...cart],
          amount: amount,
          paymentId: response.razorpay_payment_id,
          name: defaultAddress.name,
          mobile: defaultAddress.mobile,
          delivery: orderAddress,
        };

        console.log(response);

        emptyCart(token, dispatchUserState);
        dispatchUserState({ type: ACTION_TYPE.ORDERS, payload: orderData });

        navigate('/order-summary', { state: orderData });
      },
      prefill: {
        name: `${defaultAddress.name}`,
        email: `${userData.email}`,
        contact: `${defaultAddress.mobile}`,
      },
      theme: {
        color: '#f44336',
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const placeOrder = (amount) => {
    if (defaultAddress) {
      displayRazorpay({ amount });
    } else {
      alert('Please Select Address');
    }
  };

  return (
    <main className='container'>
      <h3 className='txt-center fw-bold my-8'>My Cart</h3>
      {cart.length ? (
        <section className='cart-container'>
          <div className='cart-details'>
            <Address address={defaultAddress} />
            {cart &&
              cart.map((product) => (
                <CartCard key={product._id} product={product} />
              ))}
          </div>
          <CartSummary onOrder={placeOrder} />
        </section>
      ) : (
        <h3 className='txt-center fw-bold'>Cart is Empty</h3>
      )}
    </main>
  );
};
