import { v4 as uuid } from 'uuid';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: 'Captain America',
    categoryImage:
      'https://res.cloudinary.com/dxhz9n8hc/image/upload/v1664099472/captain_cyvc1b.webp',
    description:
      'literature in the form of prose, especially novels, that describes imaginary events and people',
  },
  {
    _id: uuid(),
    categoryName: 'Ironman',
    categoryImage:
      'https://res.cloudinary.com/dxhz9n8hc/image/upload/v1664099473/ironman_g5vafs.webp',
    description:
      'literature in the form of prose, especially novels, that describes imaginary events and people',
  },
  {
    _id: uuid(),
    categoryName: 'Black widow',
    categoryImage:
      'https://res.cloudinary.com/dxhz9n8hc/image/upload/v1664099473/widow_s79awl.webp',
    description:
      'literature in the form of prose, especially novels, that describes imaginary events and people',
  },
  {
    _id: uuid(),
    categoryName: 'Hulk',
    categoryImage:
      'https://res.cloudinary.com/dxhz9n8hc/image/upload/v1664099473/hulk_nbgre0.webp',
    description:
      'literature in the form of prose, especially novels, that describes imaginary events and people',
  },
  {
    _id: uuid(),
    categoryName: 'Thor',
    categoryImage:
      'https://res.cloudinary.com/dxhz9n8hc/image/upload/v1664099473/thor_t7tbrb.webp',
    description:
      'literature in the form of prose, especially novels, that describes imaginary events and people',
  },
];
