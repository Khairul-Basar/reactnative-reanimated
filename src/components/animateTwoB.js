function animate2B() {
    switch (baseTotal) {
      case 0: 
        if(!baseLoading[0] && !baseLoading[1] && !baseLoading[2]){
          (translateX.value = withSequence(withTiming(0), withSpring(175))),
          (translateY.value = withSequence(withTiming(170), withSpring(180))),
          (rotation.value = withSequence(
            withSpring(-5),
            withRepeat(withTiming(10, { duration: 40 }), 6, true),
            withTiming(0),
          ))
          setBaseLoading([0,1,0])
        }else if(!baseLoading[0] && baseLoading[1] && !baseLoading[2]){
          // Player 1
          (translateX.value = withSequence(withTiming(0), withSpring(175))),
          (translateY.value = withSequence(withTiming(170), withSpring(180))),
          (rotation.value = withSequence(
            withSpring(-5),
            withRepeat(withTiming(10, { duration: 40 }), 6, true),
            withTiming(0),
          ))

          // Player 2
          (translateX3.value = withSequence(withTiming(175), withSpring(0))),
          (translateY3.value = withSequence(withTiming(0), withSpring(0))),
          (rotation3.value = withSequence(
            withSpring(-5),
            withRepeat(withTiming(10, { duration: 40 }), 6, true),
            withTiming(0),
          ))

          setBaseLoading([0,1,0])
        }
        setBaseTotal(baseTotal+1)
        break

      case 1:
        if(!baseLoading[0] && baseLoading[1] && !baseLoading[2]){

          // Player 1
          (translateX.value = withSequence(withTiming(175), withSpring(0))),
          (translateY.value = withSequence(withTiming(0), withSpring(0))),
          (rotation.value = withSequence(
            withSpring(-5),
            withRepeat(withTiming(10, { duration: 40 }), 6, true),
            withTiming(0),
          ))

          // Player 2
          (translateX3.value = withSequence(withTiming(0), withSpring(175))),
          (translateY3.value = withSequence(withTiming(170), withSpring(180))),
          (rotation3.value = withSequence(
            withSpring(-5),
            withRepeat(withTiming(10, { duration: 40 }), 6, true),
            withTiming(0),
          ))

          setBaseLoading([0,1,0])
        }
        setBaseTotal(0)
        break
    }

    
  }





// 2B for single Player

// function animate2B() {
//   switch(baseTotal){
//     case 0:
//       if(!baseLoading[0] && !baseLoading[1] && !baseLoading[2]){
//         (translateX.value = withSequence(withTiming(0), withSpring(175))),
//         (translateY.value = withSequence(withTiming(170), withSpring(180))),
//         (rotation.value = withSequence(
//           withSpring(-5),
//           withRepeat(withTiming(10, { duration: 40 }), 6, true),
//           withTiming(0),
//         ))
//         setBaseLoading([0,1,0])
//       }else if(baseLoading[0] && !baseLoading[1] && !baseLoading[2]){
//         (translateX.value = withSequence(withTiming(170), withSpring(180))),
//         (translateY.value = withSequence(withTiming(170), withSpring(0))),
//         (rotation.value = withSequence(
//           withSpring(-5),
//           withRepeat(withTiming(10, { duration: 40 }), 6, true),
//           withTiming(0),
//         ))
//         setBaseLoading([0,0,1])
//       }else if(!baseLoading[0] && baseLoading[1] && !baseLoading[2]){
//         (translateX.value = withSequence(withTiming(170), withSpring(180))),
//         (translateY.value = withSequence(withTiming(170), withSpring(0))),
//         (rotation.value = withSequence(
//           withSpring(-5),
//           withRepeat(withTiming(10, { duration: 40 }), 6, true),
//           withTiming(0),
//         ))
//         setBaseLoading([0,0,0])
//       }else if(!baseLoading[0] && !baseLoading[1] && baseLoading[2]){
//         (translateX.value = withSpring(0)),
//         (translateY.value =  withSpring(0)),
//         (rotation.value = withSequence(
//           withSpring(-5),
//           withRepeat(withTiming(10, { duration: 40 }), 6, true),
//           withTiming(0),
//         ))
//         setBaseLoading([0,0,0])
//       }
//       setBaseTotal(baseTotal+1)
//       break

//     case 1:
//       if(!baseLoading[0] && !baseLoading[1] && !baseLoading[2]){
//         (translateX.value = withSequence(withTiming(0), withSpring(175))),
//         (translateY.value = withSequence(withTiming(170), withSpring(180))),
//         (rotation.value = withSequence(
//           withSpring(-5),
//           withRepeat(withTiming(10, { duration: 40 }), 6, true),
//           withTiming(0),
//         ))
//         setBaseLoading([0,1,0])
//       }else if(!baseLoading[0] && baseLoading[1] && !baseLoading[2]){
//         (translateX.value = withSequence(withTiming(175), withSpring(0))),
//         (translateY.value = withSequence(withTiming(0), withSpring(0))),
//         (rotation.value = withSequence(
//           withSpring(-5),
//           withRepeat(withTiming(10, { duration: 40 }), 6, true),
//           withTiming(0),
//         ))
//         setBaseLoading([0,0,0])
//       }else if(baseLoading[0] && !baseLoading[1] && !baseLoading[2]){
//         (translateX.value = withSequence(withTiming(170), withSpring(180))),
//         (translateY.value = withSequence(withTiming(170), withSpring(0))),
//         (rotation.value = withSequence(
//           withSpring(-5),
//           withRepeat(withTiming(10, { duration: 40 }), 6, true),
//           withTiming(0),
//         ))
//         setBaseLoading([0,0,1])
//       }else if(!baseLoading[0] && !baseLoading[1] && baseLoading[2]){
//         (translateX.value =  withSpring(0)),
//         (translateY.value = withSpring(0)),
//         (rotation.value = withSequence(
//           withSpring(-5),
//           withRepeat(withTiming(10, { duration: 40 }), 6, true),
//           withTiming(0),
//         ))
//         setBaseLoading([0,0,0])
//       }
//       setBaseTotal(0)
//       break
      
//     case 2:
//       if(baseLoading[0] && !baseLoading[1] && !baseLoading[2]){
//         (translateX.value = withSequence(withTiming(170), withSpring(180))),
//         (translateY.value = withSequence(withTiming(170), withSpring(0))),
//         (rotation.value = withSequence(
//           withSpring(-5),
//           withRepeat(withTiming(10, { duration: 40 }), 6, true),
//           withTiming(0),
//         ))
//         setBaseLoading([0,0,1])
//       }else if(!baseLoading[0] && baseLoading[1] && !baseLoading[2]){
//         (translateX.value = withSequence(withTiming(170), withSpring(0))),
//         (translateY.value = withSequence(withTiming(0), withSpring(0))),
//         (rotation.value = withSequence(
//           withSpring(-5),
//           withRepeat(withTiming(10, { duration: 40 }), 6, true),
//           withTiming(0),
//         ))
//         setBaseLoading([0,0,0])
//       }else if(!baseLoading[0] && !baseLoading[1] && baseLoading[2]){
//         (translateX.value =  withSpring(0)),
//         (translateY.value =  withSpring(0)),
//         (rotation.value = withSequence(
//           withSpring(-5),
//           withRepeat(withTiming(10, { duration: 40 }), 6, true),
//           withTiming(0),
//         ))
//         setBaseLoading([0,0,0])
//       }else if(!baseLoading[0] && !baseLoading[1] && !baseLoading[2]){
//         (translateX.value = withSequence(withTiming(0), withSpring(175))),
//         (translateY.value = withSequence(withTiming(170), withSpring(180))),
//         (rotation.value = withSequence(
//           withSpring(-5),
//           withRepeat(withTiming(10, { duration: 40 }), 6, true),
//           withTiming(0),
//         ))
//         setBaseLoading([0,1,0])
//       }
//       setBaseTotal(3)
//       break

//     case 3:
//       if(!baseLoading[0] && !baseLoading[1] && !baseLoading[2]){
//         (translateX.value = withSequence(withTiming(0), withSpring(175))),
//         (translateY.value = withSequence(withTiming(170), withSpring(180))),
//         (rotation.value = withSequence(
//           withSpring(-5),
//           withRepeat(withTiming(10, { duration: 40 }), 6, true),
//           withTiming(0),
//         ))
//         setBaseLoading([0,1,0])
//       }else if(baseLoading[0] && !baseLoading[1] && !baseLoading[2]){
//         (translateX.value = withSequence(withTiming(170), withSpring(180))),
//         (translateY.value = withSequence(withTiming(170), withSpring(0))),
//         (rotation.value = withSequence(
//           withSpring(-5),
//           withRepeat(withTiming(10, { duration: 40 }), 6, true),
//           withTiming(0),
//         ))
//         setBaseLoading([0,0,1])
//       }else if(!baseLoading[0] && baseLoading[1] && !baseLoading[2]){
//         (translateX.value = withSequence(withTiming(170), withSpring(0))),
//         (translateY.value = withSequence(withTiming(0), withSpring(0))),
//         (rotation.value = withSequence(
//           withSpring(-5),
//           withRepeat(withTiming(10, { duration: 40 }), 6, true),
//           withTiming(0),
//         ))
//         setBaseLoading([0,0,0])
//       }else if(!baseLoading[0] && !baseLoading[1] && baseLoading[2]){
//         (translateX.value =  withSpring(0)),
//         (translateY.value =  withSpring(0)),
//         (rotation.value = withSequence(
//           withSpring(-5),
//           withRepeat(withTiming(10, { duration: 40 }), 6, true),
//           withTiming(0),
//         ))
//         setBaseLoading([0,0,0])
//       }
//       setBaseTotal(0)
//       break
//     }
// }