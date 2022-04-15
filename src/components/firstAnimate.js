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
  const out = useSharedValue(1)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { rotateZ: `${rotation.value}deg` },
      ],
      opacity: out.value,
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
      <View style={styles.btnGroup}>
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
              setPress(current => current + 1)
            }
            if (press === 1) {
              ;(translateX.value = withSpring(175)),
                (translateY.value = withSpring(180)),
                (rotation.value = withSequence(
                  withSpring(-5),
                  withRepeat(withTiming(10, { duration: 40 }), 6, true),
                  withTiming(0, { duration: 50 }),
                ))

              setPress(current => current + 1)
            }
            if (press === 2) {
              ;(translateX.value = withSpring(180)),
                (translateY.value = withSpring(0)),
                (rotation.value = withSequence(
                  withSpring(-5),
                  withRepeat(withTiming(10, { duration: 40 }), 6, true),
                  withTiming(0, { duration: 50 }),
                ))
              setPress(current => current + 1)
            }
            if (press === 3) {
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
          <Text style={styles.btnText}>1B</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => {
            ;(translateX.value = withSequence(withTiming(0), withSpring(175))),
              (translateY.value = withSequence(
                withTiming(170),
                withSpring(180),
              )),
              (rotation.value = withSequence(
                withSpring(-5),
                withRepeat(withTiming(10, { duration: 40 }), 6, true),
                withTiming(0),
              ))
          }}>
          <Text style={styles.btnText}>2B</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => {
            ;(translateX.value = withSequence(
              withTiming(0),
              withTiming(175),
              withSpring(175),
            )),
              (translateY.value = withSequence(
                withTiming(170),
                withTiming(180),
                withSpring(0),
              )),
              (rotation.value = withSequence(
                withSpring(-5),
                withRepeat(withTiming(10, { duration: 40 }), 6, true),
                withTiming(0),
              ))
          }}>
          <Text style={styles.btnText}>3B</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => {
            ;(translateX.value = withSequence(
              withTiming(0),
              withTiming(175),
              withTiming(175),
              withSpring(0),
            )),
              (translateY.value = withSequence(
                withTiming(170),
                withTiming(180),
                withTiming(0),
                withSpring(0),
              )),
              (rotation.value = withSequence(
                withSpring(-5),
                withTiming(0),
                withTiming(0),
                withRepeat(withTiming(10, { duration: 40 }), 10, true),
              ))
          }}>
          <Text style={styles.btnText}>HR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => {
            out.value = withSequence(
              withTiming(0, { duration: 500 }),
              withSpring(1),
            )
            translateX.value = withSequence(
              withTiming(0, { duration: 500 }),
              withSpring(0),
            )
            translateY.value = withSequence(
              withTiming(170, { duration: 500 }),
              withSpring(0),
            )
          }}>
          <Text style={styles.btnText}>OUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnGroup: {
    marginTop: 50,
    flexDirection: 'row',
  },
  btnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,255,0.7)',
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
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
