import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import type { Product } from '../types/product';
import { styles } from '../styles/ProductCardStyles';

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: product.images[0] }} style={styles.image} />
      </View>

      <View style={styles.details}>
        <Text style={styles.name}>{product.title}</Text>
        <Text style={styles.subtitle} numberOfLines={2}>
          {product.description}
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.price}>${product.price}</Text>
        <TouchableOpacity style={styles.actionButton} activeOpacity={0.8}>
          <MaterialIcons name="add-shopping-cart" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
