import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated'

export default function FirstAnimate() {
  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)
  const rotation = useSharedValue(0)

  const [press, setPress] = useState(0)
  const hide = useSharedValue(1)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { rotateZ: `${rotation.value}deg` },
      ],
      opacity: hide.value,
    }
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Animated.View style={[styles.imgContainer, animatedStyle]}>
          <Animated.Image
            source={require('../../assets/asset2.png')}
            style={styles.imgStyle}
          />
        </Animated.View>
      </View>

      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => {
          if (press === 0) {
            ;(translateX.value = withSpring(0)),
              (translateY.value = withSpring(170)),
              (rotation.value = withSequence(
                withSpring(-5),
                withRepeat(withTiming(10, { duration: 40 }), 6, true),
                withTiming(0),
              ))
            hide.value = withTiming(0, { duration: 3000 })
            setPress(current => current + 1)
          }
          if (press === 1) {
            hide.value = 1
            ;(translateX.value = withSpring(175)),
              (translateY.value = withSpring(180)),
              (rotation.value = withSequence(
                withSpring(-5),
                withRepeat(withTiming(10, { duration: 40 }), 6, true),
                withTiming(0, { duration: 50 }),
              ))

            setPress(current => current + 1)
            hide.value = withTiming(0, { duration: 3000 })
          }
          if (press === 2) {
            hide.value = 1
            ;(translateX.value = withSpring(180)),
              (translateY.value = withSpring(0)),
              (rotation.value = withSequence(
                withSpring(-5),
                withRepeat(withTiming(10, { duration: 40 }), 6, true),
                withTiming(0, { duration: 50 }),
              ))
            setPress(current => current + 1)
            hide.value = withTiming(0, { duration: 3000 })
          }
          if (press === 3) {
            hide.value = 1
            ;(translateX.value = withSpring(0)),
              (translateY.value = withSpring(0)),
              (rotation.value = withSequence(
                withSpring(-5),
                withRepeat(withTiming(10, { duration: 40 }), 6, true),
                withTiming(0, { duration: 50 }),
              ))
            setPress(0)
          }
          // console.log(translateX.value, translateY.value)
        }}>
        <Text style={styles.btnText}>Click</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  btnText: {
    color: 'black',
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    width: 55,
  },
  imgStyle: {
    height: 50,
    width: 50,
    transform: [{ rotate: '130deg' }],
  },
  square: {
    height: 200,
    width: 200,
    borderWidth: 2,
    borderColor: 'salmon',
    transform: [{ rotate: `225deg` }],
  },
})
