import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  cardTouchable: {
    flex: 1,
    minWidth: 0,
    marginHorizontal: 4,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
  },
  imageWrapper: {
    width: '100%',
    aspectRatio: 0.85,
    backgroundColor: '#f5f5f5',
    borderRadius: 4,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.9)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    paddingTop: 10,
    paddingBottom: 4,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111111',
    marginBottom: 2,
  },
  category: {
    fontSize: 13,
    color: '#6b7280',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111111',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cartButton: {
    padding: 4,
  },
  cartIcon: {
    color: '#9ca3af',
  },
  cartIconActive: {
    color: '#111111',
  },
})
