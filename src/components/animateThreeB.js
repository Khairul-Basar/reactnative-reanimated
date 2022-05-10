function animate3B() {
    switch(baseTotal){
      case 0: 
        if(!baseLoading[0] && !baseLoading[1] && !baseLoading[2]){
          // Player 1
          (translateX.value = withSequence(
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
            setBaseLoading([0,0,1])
        }else if(!baseLoading[0] && !baseLoading[1] && baseLoading[2]){

          // Player 1
          (translateX.value = withSequence(
            withTiming(0),
            withTiming(175),
            withSpring(175),
          )),
            (translateY.value = withSequence(
              withTiming(170),
              withTiming(180),
              withSpring(0),
            )),
            rotation.value = withSequence(
              withSpring(5),
              withRepeat(withTiming(10, { duration: 40 }), 6, true),
              withTiming(0),
            )

            (rotation.value = withSequence(
              withSpring(-5),
              withRepeat(withTiming(10, { duration: 40 }), 6, true),
              withTiming(0),
            ))

            // Player 4
            (translateX4.value = withSequence(
              withTiming(0),
              withTiming(0),
            )),
              (translateY4.value = withSequence(
                withTiming(0),
                withTiming(0)
              )),
              (rotation4.value = withSequence(
                withSpring(-5),
                withRepeat(withTiming(10, { duration: 40 }), 6, true),
                withTiming(0),
              ))

            setBaseLoading([0,0,1])

        }
        setBaseTotal(baseTotal+1)
        break

      case 1: 
        if(!baseLoading[0] && !baseLoading[1] && baseLoading[2]){

          // Player 1
          (translateX.value = withSequence(
            withTiming(0),
            withTiming(0),
          )),
            (translateY.value = withSequence(
              withTiming(0),
              withTiming(0),
            )),

            (rotation.value = withSequence(
              withSpring(-5),
              withRepeat(withTiming(10, { duration: 40 }), 6, true),
              withTiming(0),
            ))

            // Player 4
            (translateX4.value = withSequence(
              withTiming(0),
              withTiming(175),
              withSpring(175),
            )),
              (translateY4.value = withSequence(
                withTiming(170),
                withTiming(180),
                withSpring(0),
              )),
              (rotation4.value = withSequence(
                withSpring(-5),
                withRepeat(withTiming(10, { duration: 40 }), 6, true),
                withTiming(0),
              ))

            setBaseLoading([0,0,1])

        }
        setBaseTotal(0)
        break

    }
    ;
  }