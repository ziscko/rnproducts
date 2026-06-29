import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { styles } from '../styles/BottomTabBarStyles'

type Tab = {
  key: string
  label: string
  icon: string
}

const TABS: Tab[] = [
  { key: 'home', label: 'Home', icon: 'home' },
  { key: 'shop', label: 'Shop', icon: 'search' },
  { key: 'favourites', label: 'Favourites', icon: 'favorite-border' },
  { key: 'bag', label: 'Bag', icon: 'shopping-bag' },
  { key: 'profile', label: 'Profile', icon: 'person-outline' },
]

type Props = {
  activeTab: string
  onTabPress: (key: string) => void
}

export function BottomTabBar({ activeTab, onTabPress }: Props) {
  return (
    <View style={styles.container}>
      {TABS.map(tab => {
        const isActive = tab.key === activeTab
        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.tab}
            activeOpacity={0.7}
            onPress={() => onTabPress(tab.key)}
          >
            <MaterialIcons
              name={tab.icon}
              size={24}
              style={isActive ? styles.iconActive : styles.icon}
            />
            <Text style={isActive ? styles.labelActive : styles.label}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}
