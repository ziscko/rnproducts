import React, { useEffect, useRef } from 'react'
import { Animated, Image, View } from 'react-native'
import { styles } from '../styles/SplashStyles'

import logoWhite from '../assets/pacoshop-logo-white.png'

interface SplashScreenProps {
  onFinish: () => void
}

export function SplashScreen({ onFinish }: SplashScreenProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current
  const scaleAnim = useRef(new Animated.Value(0.8)).current

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start()

    const timer = setTimeout(() => {
      onFinish()
    }, 2000)

    return () => clearTimeout(timer)
  }, [fadeAnim, scaleAnim, onFinish])

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.logoContainer,
          { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
        ]}
      >
        <Image source={logoWhite} style={styles.logo} resizeMode="contain" />
      </Animated.View>
    </View>
  )
}
