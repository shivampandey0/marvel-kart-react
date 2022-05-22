import {
  HIGH_LOW_PRICE,
  HIGH_LOW_RATING,
  LOW_HIGH_PRICE,
  LOW_HIGH_RATING,
} from './constants';

export const sortBy = (state, data) => {
  switch (state.sortBy) {
    case HIGH_LOW_PRICE:
      return [...data].sort(
        (prev, curr) => Number(curr.price) - Number(prev.price)
      );
    case LOW_HIGH_PRICE:
      return [...data].sort(
        (prev, curr) => Number(prev.price) - Number(curr.price)
      );
    case HIGH_LOW_RATING:
      return [...data].sort(
        (prev, curr) =>
          Number(curr.rating.starRating) - Number(prev.rating.starRating)
      );
    case LOW_HIGH_RATING:
      return [...data].sort(
        (prev, curr) =>
          Number(prev.rating.starRating) - Number(curr.rating.starRating)
      );
    default:
      return data;
  }
};

export const inStock = (state, data) =>
  !state.inStock ? [...data].filter((item) => item.inStock) : data;

export const fastDelivery = (state, data) =>
  state.fastDelivery ? [...data].filter((item) => item.fastDelivery) : data;

export const priceRange = (state, data) => {
  return [...data].filter((item) => Number(item.price) <= state.priceRange);
};

export const rating = (state, data) => {
  switch (state.rating) {
    case 1:
      return [...data].filter((item) => Number(item.rating.starRating) >= 1);
    case 2:
      return [...data].filter((item) => Number(item.rating.starRating) >= 2);
    case 3:
      return [...data].filter((item) => Number(item.rating.starRating) >= 3);
    case 4:
      return [...data].filter((item) => Number(item.rating.starRating) >= 4);

    default:
      return data;
  }
};

export const categories = (state, data) => {
  if (state.categories.length === 0) {
    return data;
  }

  return [...data].filter((item) =>
    state.categories.includes(item.categoryName.toLowerCase())
  );
};

export const productTypes = (state, data) => {
  if (state.productTypes.length === 0) {
    return data;
  }

  return [...data].filter((item) =>
    state.productTypes.includes(item.productType.toLowerCase())
  );
};

export const search = (state, data) => {
  if (!state.searchTerm) {
    return data;
  }

  return [...data].filter((item) =>
    item.title.toLowerCase().includes(state.searchTerm)
  );
};
