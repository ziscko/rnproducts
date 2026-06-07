import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import type { Product } from '../types/product';

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <View style={[styles.card, { backgroundColor: product.color }]}>
      <View style={styles.imagePlaceholder}>
        <MaterialIcons name="inventory-2" size={40} color="#5c6bc0" />
      </View>

      <View style={styles.details}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.subtitle}>{product.subtitle}</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.price}>{product.price}</Text>
        <TouchableOpacity style={styles.actionButton} activeOpacity={0.8}>
          <MaterialIcons name="add-shopping-cart" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 22,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 3,
  },
  imagePlaceholder: {
    width: 64,
    height: 64,
    borderRadius: 18,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  details: {
    marginBottom: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
  },
  actionButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: '#2f6ce5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
