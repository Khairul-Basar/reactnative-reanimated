import React from 'react'
import { StyleSheet, View } from 'react-native'
import FirstAnimate from './src/components/firstAnimate'
import GestureEvents from './src/components/gestureEvents'

import GestureHandlerPractice from './src/components/gestureHandlerPractice'
import Task from './src/components/task'

export default function App() {
  return (
    <View style={styles.container}>
      <FirstAnimate />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
