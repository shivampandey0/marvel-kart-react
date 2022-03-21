import { ACTION_TYPE } from "../utils";

export const initial = {
  sortBy: null,
  rating: null,
  inStock: false,
  fastDelivery: false,
  priceRange: 1000,
  categories: [],
  productTypes: [],
};

export const filterReducer = (state, action) => {
  
  switch (action.type) {
    case ACTION_TYPE.SORT_BY:
      return { ...state, sortBy: action.payload };

    case ACTION_TYPE.PRICE_RANGE:
      return { ...state, priceRange: Number(action.payload) };

    case ACTION_TYPE.RATING:
      return { ...state, rating: action.payload };

    case ACTION_TYPE.STOCK:
      return { ...state, inStock: action.payload };

    case ACTION_TYPE.FAST_DELIVERY:
      return { ...state, fastDelivery: action.payload };

    case ACTION_TYPE.PRODUCT_TYPE:
      return {
        ...state,
        productTypes: state.productTypes.includes(action.payload)
          ? state.productTypes.filter((val) => val !== action.payload)
          : [...state.productTypes, action.payload],
      };

    case ACTION_TYPE.CATEGORIES:
      return {
        ...state,
        categories: state.categories.includes(action.payload)
          ? state.categories.filter((val) => val !== action.payload)
          : [...state.categories, action.payload],
      };

    case ACTION_TYPE.CLEAR:
      return { ...initial };

    default:
      return state;
  }
};
