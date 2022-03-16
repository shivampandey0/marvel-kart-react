import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Captain America",
    categoryImage: "https://marvel-kart.stdcdn.com/captain.webp",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryName: "Ironman",
    categoryImage: "https://marvel-kart.stdcdn.com/ironman.webp",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryName: "Black widow",
    categoryImage: "https://marvel-kart.stdcdn.com/widow.webp",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryName: "Hulk",
    categoryImage: "https://marvel-kart.stdcdn.com/hulk.webp",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryName: "Thor",
    categoryImage: "https://marvel-kart.stdcdn.com/thor.webp",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  }
];
