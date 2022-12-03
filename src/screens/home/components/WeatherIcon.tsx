import React from 'react';
import {View, StyleSheet} from 'react-native';
import Cloud from '../../../../assets/icons/cloudBase.svg';
import {CEMENT, GOLD} from '../../../utils/Colors';

const WeatherIcon = () => (
  <View style={styles.container}>
    <View style={styles.sun} />
    <Cloud width={18} height={11} style={styles.cloud} />
  </View>
);

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
  },
  cloud: {
    position: 'absolute',
  },
});

export default WeatherIcon;
