import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export function Header() {
  return (
    <View style={styles.container}>
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
  );
}

const styles = StyleSheet.create({
  container: {
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
  },
  brandText: {
    marginLeft: 8,
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
  },
});
