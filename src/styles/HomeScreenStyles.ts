import { StyleSheet } from 'react-native'
import { COLORS } from './theme'

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 12,
  },
  shopTitle: {
    fontSize: 30,
    fontWeight: '600',
    color: '#111111',
  },
  productList: {
    paddingHorizontal: 12,
    paddingBottom: 16,
    paddingTop: 16,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
  paginationButton: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 14,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 96,
  },
  paginationButtonText: {
    color: '#fff',
    fontWeight: '700',
  },
  paginationLabel: {
    color: '#6b7280',
    fontWeight: '700',
    marginHorizontal: 14,
  },
  disabledButton: {
    opacity: 0.3,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  errorText: {
    color: '#b91c1c',
    fontSize: 16,
    textAlign: 'center',
  },
})
