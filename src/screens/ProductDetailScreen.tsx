import React, { useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import type { Product } from '../types/product'
import { SafeAreaView } from 'react-native-safe-area-context'

import { styles } from '../styles/ProductDetailStyles'

type Props = {
  product: Product
  onBack: () => void
}

export function ProductDetailScreen({ product, onBack }: Props) {
  const { width } = useWindowDimensions()
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.headerRow}>
          <TouchableOpacity
            style={styles.backButton}
            activeOpacity={0.7}
            onPress={onBack}
          >
            <MaterialIcons name="arrow-back" size={26} color="#111" />
          </TouchableOpacity>
          <Text style={styles.screenTitle}>Product</Text>
        </View>

        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={event => {
            const index = Math.round(event.nativeEvent.contentOffset.x / width)
            setActiveIndex(index)
          }}
          style={styles.imageCarousel}
        >
          {product.images.map((image, index) => (
            <Image
              key={`${image}-${index}`}
              source={{ uri: image }}
              style={[styles.productImage, { width: width - 32 }]}
            />
          ))}
        </ScrollView>

        <View style={styles.carouselDots}>
          {product.images.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, index === activeIndex && styles.activeDot]}
            />
          ))}
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
