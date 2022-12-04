import React from 'react';
import {Animated} from 'react-native';
import {View, StyleSheet} from 'react-native';
import Cloud from '../../../../assets/icons/cloudBase.svg';
import {CEMENT, GOLD} from '../../../utils/Colors';

interface WeatherIconProps {
  animatedValue: Animated.Value;
}

const WeatherIcon = (props: WeatherIconProps) => {
  const sunPosition = props.animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-3, 1.5],
  });
  const cloudOpacity = props.animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [styles.cloud.opacity, 1],
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.sun, {bottom: sunPosition}]} />
      <Animated.View style={[styles.cloud, {opacity: cloudOpacity}]}>
        <Cloud width={18} height={11} />
      </Animated.View>
      <Animated.View
        style={[styles.shine, styles.shine1, {opacity: props.animatedValue}]}
      />
      <Animated.View
        style={[styles.shine, styles.shine2, {opacity: props.animatedValue}]}
      />
      <Animated.View
        style={[styles.shine, styles.shine3, {opacity: props.animatedValue}]}
      />
      <Animated.View
        style={[styles.shine, styles.shine4, {opacity: props.animatedValue}]}
      />
      <Animated.View
        style={[styles.shine, styles.shine5, {opacity: props.animatedValue}]}
      />
      <Animated.View
        style={[styles.shine, styles.shine6, {opacity: props.animatedValue}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 19,
    bottom: 4,
  },
  sun: {
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: CEMENT,
    backgroundColor: GOLD,
    width: 8.42,
    height: 7.6,
    bottom: 1.5,
  },
  cloud: {
    position: 'absolute',
    opacity: 0.4,
  },
  shine: {
    position: 'absolute',
    width: 1,
    height: 2.5,
    borderRadius: 1,
    backgroundColor: CEMENT,
  },
  shine1: {
    transform: [{rotate: '-33deg'}],
    top: -4,
    start: '55%',
  },
  shine2: {
    start: '72%',
    top: -5,
  },
  shine3: {
    transform: [{rotate: '32deg'}],
    start: '92%',
    top: -4.5,
  },
  shine4: {
    transform: [{rotate: '62deg'}],
    top: -2,
    start: '105%',
  },
  shine5: {
    transform: [{rotate: '90deg'}],
    start: '109%',
    top: 1.2,
  },
  shine6: {
    transform: [{rotate: '118deg'}],
    start: '105%',
    top: 4,
  },
});

export default WeatherIcon;
