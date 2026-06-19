import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { styles } from '../styles/ProductCardStyles'
import type { Product } from '../types/product'

type Props = {
  product: Product
  onPress?: () => void
}

export function ProductCard({ product, onPress }: Props) {
  const [inCart, setInCart] = useState(false)

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
          <View style={styles.priceRow}>
            <Text style={styles.price}>US${product.price}</Text>
            <TouchableOpacity
              style={styles.cartButton}
              activeOpacity={0.75}
              onPress={() => setInCart(!inCart)}
            >
              <MaterialIcons
                name={inCart ? 'shopping-cart' : 'add-shopping-cart'}
                size={14}
                style={inCart ? styles.cartIconActive : styles.cartIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}
