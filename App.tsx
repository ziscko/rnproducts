import React, { useState, useCallback } from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SplashScreen } from './src/screens/SplashScreen'
import { HomeScreen } from './src/screens/HomeScreen'
import { useProducts } from './src/hooks/useProducts'

function App() {
  const [splashDone, setSplashDone] = useState(false)
  const productState = useProducts()

  const dataReady = !productState.loading
  const showSplash = !splashDone || !dataReady

  const handleSplashFinish = useCallback(() => {
    setSplashDone(true)
  }, [])

  if (showSplash) {
    return (
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" backgroundColor="#f7f8fc" />
        <SplashScreen onFinish={handleSplashFinish} />
      </SafeAreaProvider>
    )
  }

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#f7f8fc" />
      <HomeScreen initialProductState={productState} />
    </SafeAreaProvider>
  )
}

export default App
