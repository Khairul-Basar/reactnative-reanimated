import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {
  PanGestureHandler,
  TapGestureHandler,
} from 'react-native-gesture-handler'
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated'

export default function GestureEvents() {
  const pressed = useSharedValue(false)
  const x = useSharedValue(10)
  const y = useSharedValue(10)
  const start = 10

  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, context) => {
      pressed.value = true
      context.startX = x.value
      context.startY = y.value
    },
    onActive: (event, context) => {
      x.value = withSpring(context.startX + event.translationX)
      y.value = withSpring(context.startY + event.translationY)
    },
    onEnd: (event, context) => {
      pressed.value = false
    },
  })

  const uas = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed.value
        ? 'rgba(0,0,255,0.3)'
        : 'rgba(255,0,0,0.5)',
      transform: [
        {
          translateX: x.value,
        },
        {
          translateY: y.value,
        },
      ],
    }
  })
  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={eventHandler}>
        <Animated.View style={[styles.ball, uas]} />
      </PanGestureHandler>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ball: {
    height: 150,
    width: 150,
    borderRadius: 80,
  },
})
