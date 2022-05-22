import { ACTION_TYPE } from '../utils/constants';

export const initialUserState = {
  token: null,
  userData: {
    wishlist: [],
    cart: [],
  },
};

export const userStateReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.INITIAL_STATE: {
      const newState = {
        ...state,
        token: action.payload.encodedToken,
        userData: action.payload.foundUser,
      };

      localStorage.setItem('token', newState.token);
      localStorage.setItem('userData', JSON.stringify(newState.userData));
      return newState;
    }

    case ACTION_TYPE.ADD_TO_WISHLIST: {
      const newState = {
        ...state,
        userData: { ...state.userData, wishlist: action.payload },
      };
      localStorage.setItem('userData', JSON.stringify(newState.userData));
      return newState;
    }

    case ACTION_TYPE.ADD_TO_CART: {
      const newState = {
        ...state,
        userData: { ...state.userData, cart: action.payload },
      };
      localStorage.setItem('userData', JSON.stringify(newState.userData));
      return newState;
    }
    case ACTION_TYPE.ADDRESS:
      return {
        ...state,
        address: [...action.payload],
      };
    case ACTION_TYPE.CLEAR:
      localStorage.removeItem('token');
      localStorage.removeItem('userData');
      return { ...initialUserState };
    default:
      return state;
  }
};
