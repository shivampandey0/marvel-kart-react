import { v4 as uuid } from "uuid";

/**
 * Product Type Database can be added here.
 * You can add product type of your wish with different attributes
 * */

export const types = [
  {
    _id: uuid(),
    productType: "Action Figures",
    categoryImage: "https://marvel-kart.stdcdn.com/captain.webp",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    productType: "Bags",
    categoryImage: "https://marvel-kart.stdcdn.com/ironman.webp",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    productType: "Costumes",
    categoryImage: "https://marvel-kart.stdcdn.com/widow.webp",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    productType: "T-Shirts & Tops",
    categoryImage: "https://marvel-kart.stdcdn.com/hulk.webp",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
];
