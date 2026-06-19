import { useCallback, useEffect, useState } from 'react'
import type { Product } from '../types/product'
import { fetchProducts } from '../services/productService'

const PAGE_SIZE = 20

export function useProducts(initialPage = 1) {
  const [products, setProducts] = useState<Product[]>([])
  const [page, setPage] = useState(initialPage)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [hasMore, setHasMore] = useState(false)

  const loadProducts = useCallback(async (pageToLoad: number) => {
    setLoading(true)
    setError(null)

    try {
      const data = await fetchProducts(pageToLoad, PAGE_SIZE)
      setProducts(data)
      setHasMore(data.length === PAGE_SIZE)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load products.')
      setProducts([])
      setHasMore(false)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void loadProducts(page)
  }, [loadProducts, page])

  const refresh = useCallback(() => {
    void loadProducts(page)
  }, [loadProducts, page])

  return {
    products,
    page,
    setPage,
    loading,
    error,
    hasMore,
    refresh,
  }
}
