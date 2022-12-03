import React from 'react';
import {View, StyleSheet} from 'react-native';
import Cloud from '../../../../assets/icons/cloudBase.svg';
import {CEMENT, GOLD} from '../../../utils/Colors';

const WeatherIcon = () => (
  <View style={styles.container}>
    <View style={styles.sun} />
    <Cloud width={18} height={11} style={styles.cloud} />
    <View style={[styles.shine, styles.shine1]} />
    <View style={[styles.shine, styles.shine2]} />
    <View style={[styles.shine, styles.shine3]} />
    <View style={[styles.shine, styles.shine4]} />
    <View style={[styles.shine, styles.shine5]} />
    <View style={[styles.shine, styles.shine6]} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 19,
    bottom: 4,
    // backgroundColor: 'red',
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
    top: 4.2,
  },
});

export default WeatherIcon;
