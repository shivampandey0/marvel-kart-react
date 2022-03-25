import { ACTION_TYPE } from "../utils/constants";

export const initialUserState = {
  token: null,
  userData: null,
};

export const userStateReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.INITIAL_STATE:
      return {
        token: action.payload.encodedToken,
        userData: action.payload.foundUser,
      };

    case ACTION_TYPE.CLEAR:
      return { ...initialUserState };
    default:
      return state;
  }
};
