import axios from 'axios';
import { ACTION_TYPE } from './constants';

export const emptyCart = async (token, dispatch) => {
  try {
    const { data } = await axios.delete('/user/cart', {
      headers: { authorization: token },
    });
    dispatch({
      type: ACTION_TYPE.ADD_TO_CART,
      payload: data.cart,
    });
  } catch (error) {
    throw new Error(error);
  }
};
