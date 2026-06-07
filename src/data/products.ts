import type { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 3,
    title: 'Classic Heather Gray Hoodie 1',
    slug: 'classic-heather-gray-hoodie-1',
    price: 69,
    description:
      'Stay cozy and stylish with our Classic Heather Gray Hoodie. Crafted from soft, durable fabric, it features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Perfect for a casual day out or a relaxing evening in, this hoodie is a versatile addition to any wardrobe.',
    category: {
      id: 1,
      name: 'Clothes',
      slug: 'clothes',
      image: 'https://i.imgur.com/QkIa5tT.jpeg',
      creationAt: '2026-06-06T20:40:27.000Z',
      updatedAt: '2026-06-06T20:40:27.000Z',
    },
    images: ['https://i.imgur.com/cHddUCu.jpeg'],
    creationAt: '2026-06-06T20:40:27.000Z',
    updatedAt: '2026-06-06T21:08:25.000Z',
  },
  {
    id: 4,
    title: 'Classic Grey Hooded Sweatshirt',
    slug: 'classic-grey-hooded-sweatshirt',
    price: 90,
    description:
      'Elevate your casual wear with our Classic Grey Hooded Sweatshirt. Made from a soft cotton blend, this hoodie features a front kangaroo pocket, an adjustable drawstring hood, and ribbed cuffs for a snug fit. Perfect for those chilly evenings or lazy weekends, it pairs effortlessly with your favorite jeans or joggers.',
    category: {
      id: 1,
      name: 'Clothes',
      slug: 'clothes',
      image: 'https://i.imgur.com/QkIa5tT.jpeg',
      creationAt: '2026-06-06T20:40:27.000Z',
      updatedAt: '2026-06-06T20:40:27.000Z',
    },
    images: [
      'https://i.imgur.com/R2PN9Wq.jpeg',
      'https://i.imgur.com/IvxMPFr.jpeg',
      'https://i.imgur.com/7eW9nXP.jpeg',
    ],
    creationAt: '2026-06-06T20:40:27.000Z',
    updatedAt: '2026-06-06T20:40:27.000Z',
  },
];
