import {ACTION_TYPE} from '../utils/constants';

export const dataReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.CATEGORIES:
      return { ...state, categories: action.payload };
    case ACTION_TYPE.PRODUCTS:
      return { ...state, products: action.payload };

    default:
      return state;
  }
};
