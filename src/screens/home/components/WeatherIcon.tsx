import React from 'react';
import {View, StyleSheet} from 'react-native';
import Sun from '../../../../assets/icons/sunBg.svg';
import Cloud from '../../../../assets/icons/cloudBase.svg';
import {CEMENT} from '../../../utils/Colors';

const WeatherIcon = () => (
  <View style={styles.container}>
    <Sun width={8.5} height={7.5} style={styles.sun} />
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
  },
  cloud: {
    position: 'absolute',
  },
});

export default WeatherIcon;
