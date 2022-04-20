function animate1B() {
  switch (press) {
    case 0:
      ;(translateX.value = withSpring(0)),
        (translateY.value = withSpring(170)),
        (rotation.value = withSequence(
          withSpring(-5),
          withRepeat(withTiming(10, { duration: 40 }), 6, true),
          withTiming(0),
        )),
        setIsVisible(1)
      setPress(current => current + 1)

      break

    case 1:
      ;(translateX.value = withSpring(175)),
        (translateY.value = withSpring(180)),
        (rotation.value = withSequence(
          withSpring(-5),
          withRepeat(withTiming(10, { duration: 40 }), 6, true),
          withTiming(0, { duration: 50 }),
        ))

      setPress(current => current + 1)
      break

    case 2:
      ;(translateX.value = withSpring(180)),
        (translateY.value = withSpring(0)),
        (rotation.value = withSequence(
          withSpring(-5),
          withRepeat(withTiming(10, { duration: 40 }), 6, true),
          withTiming(0, { duration: 50 }),
        ))
      setPress(current => current + 1)
      break

    case 3:
      ;(translateX.value = withSpring(0)),
        (translateY.value = withSpring(0)),
        (rotation.value = withSequence(
          withSpring(-5),
          withRepeat(withTiming(10, { duration: 40 }), 6, true),
          withTiming(0, { duration: 50 }),
        ))
      setPress(0)
      break
    default:
      console.log('bruh')
      break
  }
}
