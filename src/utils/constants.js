export const ACTION_TYPE = {
  CATEGORIES: 'CATEGORIES',
  PRODUCTS: 'PRODUCTS',
  PRODUCT_TYPE: 'PRODUCT_TYPE',
  SORT_BY: 'SORT_BY',
  RATING: 'RATING',
  SEARCH: 'SEARCH',
  FILTER_CATEGORIES: 'FILTER_CATEGORIES',
  FILTER_PRODUCT_TYPES: 'FILTER_PRODUCT_TYPES',
  PRICE_RANGE: 'PRICE_RANGE',
  STOCK: 'STOCK',
  FAST_DELIVERY: 'FAST_DELIVERY',
  CLEAR: 'CLEAR',
  FIRST_NAME: 'FIRST_NAME',
  LAST_NAME: 'LAST_NAME',
  EMAIL: 'EMAIL',
  PASSWORD: 'PASSWORD',
  CONFIRM_PASSWORD: 'CONFIRM_PASSWORD',
  FIRST_NAME_ERROR: 'FIRST_NAME_ERROR',
  LAST_NAME_ERROR: 'LAST_NAME_ERROR',
  EMAIL_ERROR: 'EMAIL_ERROR',
  PASSWORD_ERROR: 'PASSWORD_ERROR',
  CONFIRM_PASSWORD_ERROR: 'CONFIRM_PASSWORD_ERROR',
  //userState
  TOKEN: 'TOKEN',
  USER_ID: 'USER_ID',
  ADD_TO_CART: ' ADD_TO_CART',
  INITIAL_STATE: ' INITIAL_STATE',
  ADD_TO_WISHLIST: 'ADD_TO_WISHLIST',
  REMOVE_FROM_WISHLIST: 'REMOVE_FROM_WISHLIST',
  ADDRESS: 'ADDRESS',
  ORDERS: 'ORDERS',
};

export const HIGH_LOW_PRICE = 'HIGH_LOW_PRICE';
export const HIGH_LOW_RATING = 'HIGH_LOW_RATING';
export const LOW_HIGH_PRICE = 'LOW_HIGH_PRICE';
export const LOW_HIGH_RATING = 'LOW_HIGH_RATING';

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const nameRegex = /^[a-zA-Z]+(\s*\w*)*$/;
export const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g;
