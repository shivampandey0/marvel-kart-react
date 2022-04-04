import { ACTION_TYPE } from "../utils/constants";

export const initial = {
  products: [],
  categories: [],
  productTypes: [],
  filters: {
    sortBy: null,
    rating: null,
    inStock: false,
    fastDelivery: false,
    priceRange: 1000,
    categories: [],
    productTypes: [],
  },
};

export const dataReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.CATEGORIES:
      return { ...state, categories: action.payload };

    case ACTION_TYPE.PRODUCTS:
      return { ...state, products: action.payload };

    case ACTION_TYPE.SORT_BY:
      return {
        ...state,
        filters: { ...state.filters, sortBy: action.payload },
      };

    case ACTION_TYPE.PRICE_RANGE:
      return {
        ...state,
        filters: { ...state.filters, priceRange: Number(action.payload) },
      };

    case ACTION_TYPE.RATING:
      return {
        ...state,
        filters: { ...state.filters, rating: action.payload },
      };

    case ACTION_TYPE.STOCK:
      return {
        ...state,
        filters: { ...state.filters, inStock: action.payload },
      };

    case ACTION_TYPE.FAST_DELIVERY:
      return {
        ...state,
        filters: { ...state.filters, fastDelivery: action.payload },
      };

    case ACTION_TYPE.FILTER_PRODUCT_TYPES:
      return {
        ...state,
        filters: {
          ...state.filters,
          productTypes: state.filters.productTypes.includes(action.payload)
            ? state.filters.productTypes.filter((val) => val !== action.payload)
            : [...state.filters.productTypes, action.payload],
        },
      };

    case ACTION_TYPE.FILTER_CATEGORIES:
      return {
        ...state,
        filters: {
          ...state.filters,
          categories: state.filters.categories.includes(action.payload)
            ? state.filters.categories.filter((val) => val !== action.payload)
            : [...state.filters.categories, action.payload],
        },
      };

    case ACTION_TYPE.CLEAR:
      return { ...state, filters: { ...initial.filters } };

    default:
      return state;
  }
};
