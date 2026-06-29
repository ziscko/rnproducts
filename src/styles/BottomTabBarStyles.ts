import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 8,
    paddingBottom: 20,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  icon: {
    color: '#6b7280',
  },
  iconActive: {
    color: '#111111',
  },
  label: {
    fontSize: 10,
    color: '#6b7280',
    marginTop: 2,
  },
  labelActive: {
    fontSize: 10,
    color: '#111111',
    fontWeight: '600',
    marginTop: 2,
  },
})
