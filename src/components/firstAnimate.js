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
  // states
  const [isVisible, setIsVisible] = useState(0)
  const [press, setPress] = useState(0)
  const [baseTotal, setBaseTotal] = useState(0)
  const [baseLoading, setBaseLoading] = useState([0, 0, 0])

  // shared value
  // player1 animate Style
  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)

  // player2 animate Style
  const translateX2 = useSharedValue(0)
  const translateY2 = useSharedValue(0)

  // player3 animate Style
  const translateX3 = useSharedValue(0)
  const translateY3 = useSharedValue(0)

  // player4 animate Style
  const translateX4 = useSharedValue(0)
  const translateY4 = useSharedValue(0)

  // Spring Effect
  const rotation = useSharedValue(0)
  const rotation2 = useSharedValue(0)
  const rotation3 = useSharedValue(0)
  const rotation4 = useSharedValue(0)

  // const visibility = useSharedValue(0)
  const out = useSharedValue(1)

  const animatePlayer1 = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { rotateZ: `${rotation.value}deg` },
      ],
      // opacity: out.value,
    }
  }, [])

  const animatePlayer2 = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX2.value },
        { translateY: translateY2.value },
        { rotateZ: `${rotation2.value}deg` },
      ],
    }
  })
  const animatePlayer3 = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX3.value },
        { translateY: translateY3.value },
        { rotateZ: `${rotation3.value}deg` },
      ],
    }
  })

  const animatePlayer4 = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX4.value },
        { translateY: translateY4.value },
        { rotateZ: `${rotation4.value}deg` },
      ],
    }
  })

  function animate1B() {
    switch (baseTotal) {
      case 0:
        if (baseLoading[0] && baseLoading[1] && baseLoading[2]) {
          // Player1
          ;(translateX.value = withSpring(0)),
            (translateY.value = withSpring(170)),
            (rotation.value = withSequence(
              withSpring(-5),
              withRepeat(withTiming(10, { duration: 40 }), 6, true),
              withTiming(0),
            )),
            // Player2
            (translateX2.value = withSpring(0)),
            (translateY2.value = withSpring(0)),
            (rotation2.value = withSequence(
              withSpring(-5),
              withRepeat(withTiming(10, { duration: 40 }), 6, true),
              withTiming(0, { duration: 50 }),
            ))(
              // Player3
              (translateX3.value = withSpring(180)),
            ),
            (translateY3.value = withSpring(0)),
            (rotation3.value = withSequence(
              withSpring(-5),
              withRepeat(withTiming(10, { duration: 40 }), 6, true),
              withTiming(0, { duration: 50 }),
            ))(
              // Player4
              (translateX4.value = withSpring(175)),
            ),
            (translateY4.value = withSpring(180)),
            (rotation4.value = withSequence(
              withSpring(-5),
              withRepeat(withTiming(10, { duration: 40 }), 6, true),
              withTiming(0, { duration: 50 }),
            ))
          setBaseLoading([1, 1, 1])
        } else if (!baseLoading[0] && !baseLoading[1] && !baseLoading[2]) {
          // Player1
          ;(translateX.value = withSpring(0)),
            (translateY.value = withSpring(170)),
            (rotation.value = withSequence(
              withSpring(-5),
              withRepeat(withTiming(10, { duration: 40 }), 6, true),
              withTiming(0),
            )),
            setBaseLoading([1, 0, 0])
        }
        setBaseTotal(baseTotal + 1)
        break

      case 1:
        if (baseLoading[0] && !baseLoading[1] && !baseLoading[2]) {
          // Player 1
          ;(translateX.value = withSpring(175)),
            (translateY.value = withSpring(180)),
            (rotation.value = withSequence(
              withSpring(-5),
              withRepeat(withTiming(10, { duration: 40 }), 6, true),
              withTiming(0, { duration: 50 }),
            ))(
              // Player 2
              (translateX2.value = withSpring(0)),
            ),
            (translateY2.value = withSpring(170)),
            (rotation2.value = withSequence(
              withSpring(-5),
              withRepeat(withTiming(10, { duration: 40 }), 6, true),
              withTiming(0, { duration: 50 }),
            ))
          setBaseLoading([1, 1, 0])
        } else if (baseLoading[0] && baseLoading[1] && baseLoading[2]) {
          // Player 1
          ;(translateX.value = withSpring(175)),
            (translateY.value = withSpring(180)),
            (rotation.value = withSequence(
              withSpring(-5),
              withRepeat(withTiming(10, { duration: 40 }), 6, true),
              withTiming(0, { duration: 50 }),
            ))(
              // Player 2
              (translateX2.value = withSpring(0)),
            ),
            (translateY2.value = withSpring(170)),
            (rotation2.value = withSequence(
              withSpring(-5),
              withRepeat(withTiming(10, { duration: 40 }), 6, true),
              withTiming(0, { duration: 50 }),
            ))(
              // Player 3
              (translateX3.value = withSpring(0)),
            ),
            (translateY3.value = withSpring(0)),
            (rotation3.value = withSequence(
              withSpring(-5),
              withRepeat(withTiming(10, { duration: 40 }), 6, true),
              withTiming(0, { duration: 50 }),
            ))(
              // Player 4
              (translateX4.value = withSpring(180)),
            ),
            (translateY4.value = withSpring(0)),
            (rotation4.value = withSequence(
              withSpring(-5),
              withRepeat(withTiming(10, { duration: 40 }), 6, true),
              withTiming(0, { duration: 50 }),
            ))
          setBaseLoading([1, 1, 1])
        }
        setBaseTotal(baseTotal + 1)
        break

      case 2:
        if (baseLoading[0] && baseLoading[1] && !baseLoading[2]) {
          // Player 1
          ;(translateX.value = withSpring(180)),
            (translateY.value = withSpring(0)),
            (rotation.value = withSequence(
              withSpring(-5),
              withRepeat(withTiming(10, { duration: 40 }), 6, true),
              withTiming(0, { duration: 50 }),
            ))(
              // Player 2
              (translateX2.value = withSpring(175)),
            ),
            (translateY2.value = withSpring(180)),
            (rotation2.value = withSequence(
              withSpring(-5),
              withRepeat(withTiming(10, { duration: 40 }), 6, true),
              withTiming(0, { duration: 50 }),
            ))(
              // Player 3
              (translateX3.value = withSpring(0)),
            ),
            (translateY3.value = withSpring(170)),
            (rotation3.value = withSequence(
              withSpring(-5),
              withRepeat(withTiming(10, { duration: 40 }), 6, true),
              withTiming(0, { duration: 50 }),
            ))
          setBaseLoading([1, 1, 1])
        } else if (baseLoading[0] && baseLoading[1] && baseLoading[2]) {
          // Player 1
          ;(translateX.value = withSpring(180)),
            (translateY.value = withSpring(0)),
            (rotation.value = withSequence(
              withSpring(-5),
              withRepeat(withTiming(10, { duration: 40 }), 6, true),
              withTiming(0, { duration: 50 }),
            ))(
              // Player 2
              (translateX2.value = withSpring(175)),
            ),
            (translateY2.value = withSpring(180)),
            (rotation2.value = withSequence(
              withSpring(-5),
              withRepeat(withTiming(10, { duration: 40 }), 6, true),
              withTiming(0, { duration: 50 }),
            ))(
              // Player 3
              (translateX3.value = withSpring(0)),
            ),
            (translateY3.value = withSpring(170)),
            (rotation3.value = withSequence(
              withSpring(-5),
              withRepeat(withTiming(10, { duration: 40 }), 6, true),
              withTiming(0, { duration: 50 }),
            ))(
              // Player 4
              (translateX4.value = withSpring(0)),
            ),
            (translateY4.value = withSpring(0)),
            (rotation4.value = withSequence(
              withSpring(-5),
              withRepeat(withTiming(10, { duration: 40 }), 6, true),
              withTiming(0, { duration: 50 }),
            ))
          setBaseLoading([1, 1, 1])
        }
        setBaseTotal(baseTotal + 1)
        break

      case 3:
        // Player 1
        ;(translateX.value = withSpring(0)),
          (translateY.value = withSpring(0)),
          (rotation.value = withSequence(
            withSpring(-5),
            withRepeat(withTiming(10, { duration: 40 }), 6, true),
            withTiming(0, { duration: 50 }),
          ))(
            // Player 2
            (translateX2.value = withSpring(180)),
          ),
          (translateY2.value = withSpring(0)),
          (rotation2.value = withSequence(
            withSpring(-5),
            withRepeat(withTiming(10, { duration: 40 }), 6, true),
            withTiming(0, { duration: 50 }),
          )),
          // Player 3
          (translateX3.value = withSpring(175)),
          (translateY3.value = withSpring(180)),
          (rotation3.value = withSequence(
            withSpring(-5),
            withRepeat(withTiming(10, { duration: 40 }), 6, true),
            withTiming(0, { duration: 50 }),
          ))(
            // Player 4
            (translateX4.value = withSpring(0)),
          ),
          (translateY4.value = withSpring(170)),
          (rotation4.value = withSequence(
            withSpring(-5),
            withRepeat(withTiming(10, { duration: 40 }), 6, true),
            withTiming(0, { duration: 50 }),
          ))
        setBaseLoading([1, 1, 1])
        setBaseTotal(0)
        break
    }
  }

  function animate2B() {
    ;(translateX.value = withSequence(withTiming(0), withSpring(175))),
      (translateY.value = withSequence(withTiming(170), withSpring(180))),
      (rotation.value = withSequence(
        withSpring(-5),
        withRepeat(withTiming(10, { duration: 40 }), 6, true),
        withTiming(0),
      ))
  }

  function animate3B() {
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
  }

  function animateHR() {
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
  }

  function animateOut() {
    out.value = withSequence(withTiming(0, { duration: 500 }), withSpring(1))
    translateX.value = withSequence(
      withTiming(0, { duration: 500 }),
      withSpring(0),
    )
    translateY.value = withSequence(
      withTiming(170, { duration: 500 }),
      withSpring(0),
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Animated.View
          style={[
            styles.imgContainer,
            { position: 'absolute' },
            animatePlayer1,
          ]}>
          
          <Animated.Image
            source={require('../../assets/asset2.png')}
            style={styles.imgStyle}
          />
        </Animated.View>
        {baseLoading[0] ? (
          <Animated.View
            style={[
              styles.imgContainer,
              animatePlayer2,
              { position: 'absolute' },
            ]}>
            
            <Animated.Image
              source={require('../../assets/asset2.png')}
              style={styles.imgStyle}
            />
          </Animated.View>
        ) : null}
        {baseLoading[1] ? (
          <Animated.View
            style={[
              styles.imgContainer,
              animatePlayer3,
              { position: 'absolute' },
            ]}>
            
            <Animated.Image
              source={require('../../assets/asset2.png')}
              style={styles.imgStyle}
            />
          </Animated.View>
        ) : null}
        {baseLoading[2] ? (
          <Animated.View
            style={[
              styles.imgContainer,
              animatePlayer4,
              { position: 'absolute' },
            ]}>
            
            <Animated.Image
              source={require('../../assets/asset2.png')}
              style={styles.imgStyle}
            />
          </Animated.View>
        ) : null}
      </View>

      <View style={styles.btnGroup}>
        <TouchableOpacity style={styles.btnStyle} onPress={() => animate1B()}>
          <Text style={styles.btnText}>1B</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnStyle} onPress={() => animate2B()}>
          <Text style={styles.btnText}>2B</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => {
            animate3B()
          }}>
          <Text style={styles.btnText}>3B</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => {
            animateHR()
          }}>
          <Text style={styles.btnText}>HR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => {
            animateOut()
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

// {visibility.value === 1 ? (
//           <Animated.View style={[styles.imgContainer, newAnimatedStyle]}>
//             <Animated.Image
//               source={require('../../assets/asset2.png')}
//               style={styles.imgStyle}
//             />
//           </Animated.View>
//         ) : null}
