import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'

export default function GestureHandlerPractice() {
  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value * 5,
        },
        {
          translateY: translateY.value,
        },
      ],
    }
  })

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.square, rStyle]} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => (translateX.value = translateX.value + 20)}>
        <Text>move !!!</Text>
      </TouchableOpacity>

      <Text>{translateX.value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    height: 70,
    width: 70,
    backgroundColor: 'rgba(0,0,255,.5)',
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'red',
  },
})
