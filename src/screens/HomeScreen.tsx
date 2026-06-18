import React, { useState } from 'react';
import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../components/Header';
import { ProductCard } from '../components/ProductCard';
import { ProductDetailScreen } from './ProductDetailScreen';
import { useProducts } from '../hooks/useProducts';
import { styles } from '../styles/HomeScreenStyles';
import type { Product } from '../types/product';

type ProductState = ReturnType<typeof useProducts>;

interface HomeScreenProps {
  initialProductState?: ProductState;
}

export function HomeScreen({ initialProductState }: HomeScreenProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const fallback = useProducts();
  const { products, page, setPage, loading, error, hasMore, refresh } =
    initialProductState ?? fallback;

  if (selectedProduct) {
    return (
      <ProductDetailScreen
        product={selectedProduct}
        onBack={() => setSelectedProduct(null)}
      />
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#2f6ce5" />
        </View>
      ) : error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : (
        <FlatList
          data={products}
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
          ItemSeparatorComponent={() => <View style={styles.separator} />}
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
    </SafeAreaView>
  );
}
