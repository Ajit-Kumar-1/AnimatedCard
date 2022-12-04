import React from 'react';
import {Animated} from 'react-native';
import {View, StyleSheet} from 'react-native';
import Cloud from '../../../../assets/icons/cloudBase.svg';
import {CEMENT, GOLD} from '../../../utils/Colors';

interface WeatherIconProps {
  primaryAnimatedValue: Animated.Value;
  secondaryAnimatedValue: Animated.Value;
}

const WeatherIcon: (props: WeatherIconProps) => JSX.Element = (
  props: WeatherIconProps,
) => {
  const sunPosition: Animated.AnimatedInterpolation<number> =
    props.primaryAnimatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-3, 1.5],
    });
  const cloudOpacity: Animated.AnimatedInterpolation<number> =
    props.secondaryAnimatedValue.interpolate({
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
        style={[
          styles.shine,
          styles.shine1,
          {
            transform: [
              {scale: props.secondaryAnimatedValue},
              {rotate: '-33deg'},
            ],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.shine,
          styles.shine2,
          {
            transform: [{scale: props.secondaryAnimatedValue}],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.shine,
          styles.shine3,
          {
            transform: [
              {scale: props.secondaryAnimatedValue},
              {rotate: '32deg'},
            ],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.shine,
          styles.shine4,
          {
            transform: [
              {scale: props.secondaryAnimatedValue},
              {rotate: '62deg'},
            ],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.shine,
          styles.shine5,
          {
            transform: [
              {scale: props.secondaryAnimatedValue},
              {rotate: '90deg'},
            ],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.shine,
          styles.shine6,
          {
            transform: [
              {scale: props.secondaryAnimatedValue},
              {rotate: '118deg'},
            ],
          },
        ]}
      />
    </View>
  );
};

const styles: any = StyleSheet.create({
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
    transform: [{rotate: '-33deg', scale: 0}],
    top: -4,
    start: '55%',
  },
  shine2: {
    start: '72%',
    top: -5,
  },
  shine3: {
    transform: [{rotate: '32deg', scale: 0}],
    start: '92%',
    top: -4.5,
  },
  shine4: {
    transform: [{rotate: '62deg', scale: 0}],
    top: -2,
    start: '105%',
  },
  shine5: {
    transform: [{rotate: '90deg', scale: 0}],
    start: '109%',
    top: 1.2,
  },
  shine6: {
    transform: [{rotate: '118deg', scale: 0}],
    start: '105%',
    top: 4,
  },
});

export default WeatherIcon;
