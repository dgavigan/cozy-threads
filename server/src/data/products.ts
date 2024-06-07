import dotenv from 'dotenv';
import { Product } from '../models/Product';

dotenv.config();

const isDevelopment = process.env.NODE_ENV === 'development';
const serverUrl = isDevelopment ? `http://localhost:${process.env.PORT}` : '';

const getServerUrl = (filename: string) =>
  `${serverUrl}/images/${filename}.webp`;

const sizes = ['small', 'medium', 'large', 'x-large'];

const products: Product[] = [
  {
    id: '1',
    title: 'Eco-friendly T-Shirt',
    description: 'Made with 100% organic cotton.',
    price: 50.0,
    imageUrl: getServerUrl('eco-t-shirt'),
    sizes,
    colors: ['red', 'blue', 'black', 'white'],
  },
  {
    id: '2',
    title: 'Recycled Wool Sweater',
    description: 'Made from 100% recycled materials.',
    price: 120.0,
    imageUrl: getServerUrl('wool-sweater'),
    sizes,
  },
  {
    id: '3',
    title: 'Bamboo Recycled Scarff',
    description: 'Soft and sustainable, made from bamboo fibers',
    price: 45.0,
    imageUrl: getServerUrl('bamboo-fabric-scarf'),
  },
  {
    id: '4',
    title: 'Hemp Jeans',
    description: 'Durable jeans made from organic hemp',
    price: 125.0,
    imageUrl: getServerUrl('hemp-jeans'),
    sizes,
  },
  {
    id: '5',
    title: 'Linen Blouse',
    description: 'Lightweight and breathable, perfect for summer',
    price: 60.0,
    imageUrl: getServerUrl('linen-blouse'),
    sizes,
  },
  {
    id: '6',
    title: 'Eco Friendly Jacket',
    description: 'Waterproof, made with recycled plastics',
    price: 150.0,
    imageUrl: getServerUrl('eco-jacket'),
  },
  {
    id: '7',
    title: 'Sustainable Yoga Pants',
    description: 'Stretchable and made from recycled polyester',
    price: 50.0,
    imageUrl: getServerUrl('yoga-pants'),
    sizes,
  },
  {
    id: '8',
    title: 'Vegan Leather Boots',
    description: 'Stylish and made from synthetic leather alternatives',
    price: 200.0,
    imageUrl: getServerUrl('leather-boots'),
  },
  {
    id: '9',
    title: 'Lyocell Lounge Pants',
    description: 'Soft, breathable pants perfect for relaxing',
    price: 40.0,
    imageUrl: getServerUrl('lounge-pants'),
  },
  {
    id: '10',
    title: 'Bamboo Sunglasses',
    description: 'Eco-friendly frames with polarized lenses',
    price: 30.0,
    imageUrl: getServerUrl('bamboo-sunglasses'),
  },
  {
    id: '11',
    title: 'Recycled Plastic Belts',
    description: 'Durable and stylish, suitable for any outfit',
    price: 25.0,
    imageUrl: getServerUrl('plastic-belts'),
  },
  {
    id: '12',
    title: 'Organic Cotton Hats',
    description: 'Available in various styles, all made from organic cotton',
    price: 45.0,
    imageUrl: getServerUrl('cotton-hat'),
  },
  {
    id: '13',
    title: 'Hemp Backpacks',
    description: 'Sturdy and spacious, ideal for everyday use',
    price: 80.0,
    imageUrl: getServerUrl('hemp-backpack'),
  },
];

export default products;
