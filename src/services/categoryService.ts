import type { Category } from '../types/product'

const CATEGORIES_URL = 'https://api.escuelajs.co/api/v1/categories'

export async function fetchCategories(): Promise<Category[]> {
  const response = await fetch(CATEGORIES_URL)

  if (!response.ok) {
    throw new Error(`Failed to fetch categories: ${response.status}`)
  }

  return response.json() as Promise<Category[]>
}
