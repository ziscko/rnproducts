import { useCallback, useEffect, useState } from 'react'
import { fetchCategories } from '../services/categoryService'
import type { Category } from '../types/product'

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const data = await fetchCategories()
      setCategories(data)
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Unable to load categories.',
      )
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void load()
  }, [load])

  return { categories, loading, error }
}
