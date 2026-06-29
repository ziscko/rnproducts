import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../styles/CategoryTabsStyles'
import type { Category } from '../types/product'

type Props = {
  categories: Category[]
  selectedId: number | null
  onSelect: (id: number | null) => void
}

export function CategoryTabs({ categories, selectedId, onSelect }: Props) {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <TouchableOpacity
          style={styles.tab}
          activeOpacity={0.7}
          onPress={() => onSelect(null)}
        >
          <Text
            style={[
              styles.tabText,
              selectedId === null && styles.tabTextActive,
            ]}
          >
            All
          </Text>
          {selectedId === null && <View style={styles.indicator} />}
        </TouchableOpacity>

        {categories.map(cat => (
          <TouchableOpacity
            key={cat.id}
            style={styles.tab}
            activeOpacity={0.7}
            onPress={() => onSelect(cat.id)}
          >
            <Text
              style={[
                styles.tabText,
                selectedId === cat.id && styles.tabTextActive,
              ]}
            >
              {cat.name}
            </Text>
            {selectedId === cat.id && <View style={styles.indicator} />}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}
