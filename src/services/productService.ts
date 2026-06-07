import type { Product } from '../types/product';

const PRODUCTS_URL = 'https://api.escuelajs.co/api/v1/products';

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(PRODUCTS_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  return response.json() as Promise<Product[]>;
}
