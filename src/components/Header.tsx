import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import logo from '../assets/pacoshop-logo-black.png'
import { styles } from '../styles/HeaderStyles'

export function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
        <MaterialIcons name="menu" size={28} color="#111" />
      </TouchableOpacity>

      <View style={styles.brandContainer}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      </View>

      <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
        <MaterialIcons name="account-circle" size={28} color="#111" />
      </TouchableOpacity>
    </View>
  )
}
