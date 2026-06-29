import React, { useState } from 'react'
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { BottomTabBar } from '../components/BottomTabBar'
import { CategoryTabs } from '../components/CategoryTabs'
import { ProductCard } from '../components/ProductCard'
import { useCategories } from '../hooks/useCategories'
import { useProducts } from '../hooks/useProducts'
import { styles } from '../styles/HomeScreenStyles'
import type { Product } from '../types/product'
import { ProductDetailScreen } from './ProductDetailScreen'

type ProductState = ReturnType<typeof useProducts>

interface HomeScreenProps {
  initialProductState?: ProductState
}

export function HomeScreen({ initialProductState }: HomeScreenProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState('shop')

  const fallback = useProducts()
  const { products, page, setPage, loading, error, hasMore, refresh } =
    initialProductState ?? fallback
  const { categories } = useCategories()

  const filteredProducts = selectedCategory
    ? products.filter(p => p.category.id === selectedCategory)
    : products

  if (selectedProduct) {
    return (
      <ProductDetailScreen
        product={selectedProduct}
        onBack={() => setSelectedProduct(null)}
      />
    )
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      {/* Title + search */}
      <View style={styles.titleRow}>
        <Text style={styles.shopTitle}>Shop</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <MaterialIcons name="search" size={26} color="#111" />
        </TouchableOpacity>
      </View>

      {/* Category tabs */}
      <CategoryTabs
        categories={categories}
        selectedId={selectedCategory}
        onSelect={setSelectedCategory}
      />

      {/* Product list */}
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#111" />
        </View>
      ) : error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : (
        <FlatList
          data={filteredProducts}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          contentContainerStyle={styles.productList}
          renderItem={({ item }) => (
            <ProductCard
              product={item}
              onPress={() => setSelectedProduct(item)}
            />
          )}
          ListFooterComponent={
            <View style={styles.pagination}>
              <TouchableOpacity
                style={[
                  styles.paginationButton,
                  page === 1 && styles.disabledButton,
                ]}
                disabled={page === 1}
                onPress={() => setPage(page - 1)}
              >
                <Text style={styles.paginationButtonText}>Previous</Text>
              </TouchableOpacity>

              <Text style={styles.paginationLabel}>Page {page}</Text>

              <TouchableOpacity
                style={[
                  styles.paginationButton,
                  !hasMore && styles.disabledButton,
                ]}
                disabled={!hasMore}
                onPress={() => setPage(page + 1)}
              >
                <Text style={styles.paginationButtonText}>Next</Text>
              </TouchableOpacity>
            </View>
          }
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={refresh} />
          }
        />
      )}

      {/* Bottom Tab Bar */}
      <BottomTabBar activeTab={activeTab} onTabPress={setActiveTab} />
    </SafeAreaView>
  )
}
