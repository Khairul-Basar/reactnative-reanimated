import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

export default function Task() {
  const translateX = useSharedValue(1);
  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value * 255,
        },
      ],
    };
  });
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <Animated.View style={styles.square} />
      </View>
      <TouchableOpacity onPress={() => translateX.value * Math.random()}>
        <Text>click</Text>
      </TouchableOpacity>
    </View>
  );
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
    backgroundColor: 'rgba(0, 0, 255,0.5)',
    borderRadius: 10,
  },
  rectangle: {
    height: 200,
    width: 300,
    borderWidth: 2,
    borderColor: 'blue',
  },
});
