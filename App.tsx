/**
 * Product store - home screen.
 * Shows a header with Material icons and a sample product list.
 */

import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Ensure the Material icon font is loaded before rendering icons
MaterialIcons.loadFont();

const products = [
  {
    id: '1',
    name: 'City Run Sneakers',
    subtitle: 'Lightweight daily comfort',
    price: '$89',
    color: '#eef6ff',
  },
  {
    id: '2',
    name: 'Urban Backpack',
    subtitle: 'Space and style for your routine',
    price: '$59',
    color: '#fff4eb',
  },
];

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#f7f8fc" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
            <MaterialIcons name="menu" size={28} color="#111" />
          </TouchableOpacity>

          <View style={styles.brandContainer}>
            <MaterialIcons name="storefront" size={24} color="#2f6ce5" />
            <Text style={styles.brandText}>Store</Text>
          </View>

          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
            <MaterialIcons name="account-circle" size={28} color="#111" />
          </TouchableOpacity>
        </View>

        <View style={styles.hero}>
          <Text style={styles.title}>Featured products</Text>
          <Text style={styles.subtitle}>Explore our sample products.</Text>
        </View>

        <FlatList
          data={products}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.productList}
          renderItem={({ item }) => (
            <View style={[styles.productCard, { backgroundColor: item.color }]}>
              <View style={styles.productImage}>
                <MaterialIcons name="inventory-2" size={40} color="#5c6bc0" />
              </View>
              <View style={styles.productDetails}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productSubtitle}>{item.subtitle}</Text>
              </View>
              <View style={styles.productFooter}>
                <Text style={styles.productPrice}>{item.price}</Text>
                <TouchableOpacity style={styles.addButton} activeOpacity={0.8}>
                  <MaterialIcons
                    name="add-shopping-cart"
                    size={18}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f7f8fc',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  iconButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  brandText: {
    marginLeft: 8,
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
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
  productCard: {
    borderRadius: 22,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 3,
  },
  productImage: {
    width: 64,
    height: 64,
    borderRadius: 18,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  productDetails: {
    marginBottom: 16,
  },
  productName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
    marginBottom: 4,
  },
  productSubtitle: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 20,
  },
  productFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
  },
  addButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: '#2f6ce5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    height: 16,
  },
});

export default App;
