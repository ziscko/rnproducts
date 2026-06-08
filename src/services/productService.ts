import type { Product } from '../types/product';

const PRODUCTS_URL = 'https://api.escuelajs.co/api/v1/products';

export async function fetchProducts(page = 1, limit = 20): Promise<Product[]> {
  const offset = (page - 1) * limit;
  const url = `${PRODUCTS_URL}?offset=${offset}&limit=${limit}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  return response.json() as Promise<Product[]>;
}
