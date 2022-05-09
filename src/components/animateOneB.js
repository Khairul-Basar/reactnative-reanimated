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



// 1B For single player

function animate1B() {
  switch(baseTotal){
    case 0: 
      if(!baseLoading[0] && !baseLoading[1] && !baseLoading[2]){
        (translateX.value = withSpring(0)),
          (translateY.value = withSpring(170)),
          (rotation.value = withSequence(
            withSpring(-5),
            withRepeat(withTiming(10, { duration: 40 }), 6, true),
            withTiming(0),
          ))
          setBaseLoading([1,0,0])
      }else if(baseLoading[0] && !baseLoading[1] && !baseLoading[2]){
        (translateX.value = withSpring(180)),
        (translateY.value = withSpring(170)),
        (rotation.value = withSequence(
          withSpring(-5),
          withRepeat(withTiming(10, { duration: 40 }), 6, true),
          withTiming(0),
        ))
        setBaseLoading([0,1,0])
      }else if(!baseLoading[0] && baseLoading[1] && !baseLoading[2]){
        (translateX.value = withSpring(180)),
        (translateY.value = withSpring(0)),
        (rotation.value = withSequence(
          withSpring(-5),
          withRepeat(withTiming(10, { duration: 40 }), 6, true),
          withTiming(0),
        ))
        setBaseLoading([0,0,1])
      }else if(!baseLoading[0] && !baseLoading[1] && baseLoading[2]){
        (translateX.value = withSpring(0)),
        (translateY.value = withSpring(0)),
        (rotation.value = withSequence(
          withSpring(-5),
          withRepeat(withTiming(10, { duration: 40 }), 6, true),
          withTiming(0),
        ))
        setBaseLoading([0,0,0])
      }
      setBaseTotal(1)
      break
    case 1:
      if(!baseLoading[0] && !baseLoading[1] && !baseLoading[2]){
        (translateX.value = withSpring(0)),
          (translateY.value = withSpring(170)),
          (rotation.value = withSequence(
            withSpring(-5),
            withRepeat(withTiming(10, { duration: 40 }), 6, true),
            withTiming(0),
          ))
          setBaseLoading([1,0,0])
      }else if(baseLoading[0] && !baseLoading[1] && !baseLoading[2]){
        (translateX.value = withSpring(180)),
          (translateY.value = withSpring(170)),
          (rotation.value = withSequence(
            withSpring(-5),
            withRepeat(withTiming(10, { duration: 40 }), 6, true),
            withTiming(0),
          ))
          setBaseLoading([0,1,0])
      }else if(!baseLoading[0] && baseLoading[1] && !baseLoading[2]){
        (translateX.value = withSpring(180)),
        (translateY.value = withSpring(0)),
        (rotation.value = withSequence(
          withSpring(-5),
          withRepeat(withTiming(10, { duration: 40 }), 6, true),
          withTiming(0),
        ))
        setBaseLoading([0,0,1])
      }else if(!baseLoading[0] && !baseLoading[1] && baseLoading[2]){
        (translateX.value = withSpring(0)),
        (translateY.value = withSpring(0)),
        (rotation.value = withSequence(
          withSpring(-5),
          withRepeat(withTiming(10, { duration: 40 }), 6, true),
          withTiming(0),
        ))
        setBaseLoading([0,0,0])
      }
      setBaseTotal(2)
      break
  
    case 2:
      if(!baseLoading[0] && !baseLoading[1] && !baseLoading[2]){
        (translateX.value = withSpring(0)),
          (translateY.value = withSpring(170)),
          (rotation.value = withSequence(
            withSpring(-5),
            withRepeat(withTiming(10, { duration: 40 }), 6, true),
            withTiming(0),
          ))
          setBaseLoading([1,0,0])
      }else if(baseLoading[0] && !baseLoading[1] && !baseLoading[2]){
        (translateX.value = withSpring(180)),
          (translateY.value = withSpring(0)),
          (rotation.value = withSequence(
            withSpring(-5),
            withRepeat(withTiming(10, { duration: 40 }), 6, true),
            withTiming(0),
          ))
        setBaseLoading([0,1,0])
      }else if(!baseLoading[0] && baseLoading[1] && !baseLoading[2]){
        (translateX.value = withSpring(0)),
          (translateY.value = withSpring(0)),
          (rotation.value = withSequence(
            withSpring(-5),
            withRepeat(withTiming(10, { duration: 40 }), 6, true),
            withTiming(0),
          ))
        setBaseLoading([0,0,1])
      }else if(!baseLoading[0] && !baseLoading[1] && baseLoading[2]){
        (translateX.value = withSpring(0)),
          (translateY.value = withSpring(170)),
          (rotation.value = withSequence(
            withSpring(-5),
            withRepeat(withTiming(10, { duration: 40 }), 6, true),
            withTiming(0),
          ))
        setBaseLoading([0,0,0])
      }
    setBaseTotal(3)
    break

    case 3:
      if(!baseLoading[0] && !baseLoading[1] && !baseLoading[2]){
        (translateX.value = withSpring(0)),
          (translateY.value = withSpring(170)),
          (rotation.value = withSequence(
            withSpring(-5),
            withRepeat(withTiming(10, { duration: 40 }), 6, true),
            withTiming(0),
          ))
          setBaseLoading([1,0,0])

      }else if(baseLoading[0] && !baseLoading[1] && !baseLoading[2]){
        (translateX.value = withSpring(0)),
          (translateY.value = withSpring(0)),
          (rotation.value = withSequence(
            withSpring(-5),
            withRepeat(withTiming(10, { duration: 40 }), 6, true),
            withTiming(0),
          ))
        setBaseLoading([0,1,0])

      }else if(!baseLoading[0] && baseLoading[1] && !baseLoading[2]){
        (translateX.value = withSpring(180)),
          (translateY.value = withSpring(0)),
          (rotation.value = withSequence(
            withSpring(-5),
            withRepeat(withTiming(10, { duration: 40 }), 6, true),
            withTiming(0),
          ))
        setBaseLoading([0,0,1])

      }else if(!baseLoading[0] && !baseLoading[1] && baseLoading[2]){
        (translateX.value = withSpring(180)),
          (translateY.value = withSpring(170)),
          (rotation.value = withSequence(
            withSpring(-5),
            withRepeat(withTiming(10, { duration: 40 }), 6, true),
            withTiming(0),
          ))
        setBaseLoading([0,0,0])

      }
    setBaseTotal(0)
    break

  }
  

}





// animate1B Case Function 
// function caseFuntion(){
//   if(!baseLoading[0] && !baseLoading[1] && !baseLoading[2]){
//     (translateX.value = withSpring(0)),
//       (translateY.value = withSpring(170)),
//       (rotation.value = withSequence(
//         withSpring(-5),
//         withRepeat(withTiming(10, { duration: 40 }), 6, true),
//         withTiming(0),
//       ))
//       setBaseLoading([1,0,0])
//   }else if(baseLoading[0] && !baseLoading[1] && !baseLoading[2]){
//     (translateX.value = withSpring(180)),
//     (translateY.value = withSpring(170)),
//     (rotation.value = withSequence(
//       withSpring(-5),
//       withRepeat(withTiming(10, { duration: 40 }), 6, true),
//       withTiming(0),
//     ))
//     setBaseLoading([0,1,0])
//   }else if(!baseLoading[0] && baseLoading[1] && !baseLoading[2]){
//     (translateX.value = withSpring(180)),
//     (translateY.value = withSpring(0)),
//     (rotation.value = withSequence(
//       withSpring(-5),
//       withRepeat(withTiming(10, { duration: 40 }), 6, true),
//       withTiming(0),
//     ))
//     setBaseLoading([0,0,1])
//   }else if(!baseLoading[0] && !baseLoading[1] && baseLoading[2]){
//     (translateX.value = withSpring(0)),
//     (translateY.value = withSpring(0)),
//     (rotation.value = withSequence(
//       withSpring(-5),
//       withRepeat(withTiming(10, { duration: 40 }), 6, true),
//       withTiming(0),
//     ))
//     setBaseLoading([0,0,0])
//   }
// }



// {baseLoading[0] ? (
//   <Animated.View
//     style={[
//       styles.imgContainer,
//       animatePlayer2,
//       { position: 'absolute' },
//     ]}>
    
//     <Animated.Image
//       source={require('../../assets/asset2.png')}
//       style={styles.imgStyle}
//     />
//   </Animated.View>
// ) : null}
// {baseLoading[1] ? (
//   <Animated.View
//     style={[
//       styles.imgContainer,
//       animatePlayer3,
//       { position: 'absolute' },
//     ]}>
    
//     <Animated.Image
//       source={require('../../assets/asset2.png')}
//       style={styles.imgStyle}
//     />
//   </Animated.View>
// ) : null}
// {baseLoading[2] ? (
//   <Animated.View
//     style={[
//       styles.imgContainer,
//       animatePlayer4,
//       { position: 'absolute' },
//     ]}>
    
//     <Animated.Image
//       source={require('../../assets/asset2.png')}
//       style={styles.imgStyle}
//     />
//   </Animated.View>
// ) : null}