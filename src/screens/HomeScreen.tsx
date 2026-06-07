import React from 'react';
import { View, FlatList, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Header } from '../components/Header';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />

      <View style={styles.hero}>
        <Text style={styles.title}>Featured products</Text>
        <Text style={styles.subtitle}>Explore our sample products.</Text>
      </View>

      <FlatList
        data={products}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.productList}
        renderItem={({ item }) => <ProductCard product={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f7f8fc',
  },
  hero: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 14,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: '#6b7280',
    lineHeight: 22,
  },
  productList: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  separator: {
    height: 16,
  },
});
