import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import type { Product } from '../types/product'
import { styles } from '../styles/ProductCardStyles'

type Props = {
  product: Product
  onPress?: () => void
}

export function ProductCard({ product, onPress }: Props) {
  return (
    <TouchableOpacity
      style={styles.cardTouchable}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <View style={styles.card}>
        <View style={styles.imageWrapper}>
          <Image source={{ uri: product.images[0] }} style={styles.image} />
          <TouchableOpacity style={styles.favoriteButton} activeOpacity={0.7}>
            <MaterialIcons name="favorite-border" size={20} color="#111" />
          </TouchableOpacity>
        </View>

        <View style={styles.info}>
          <Text style={styles.name} numberOfLines={2}>
            {product.title}
          </Text>
          <Text style={styles.category}>{product.category.name}</Text>
          <Text style={styles.price}>US${product.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
