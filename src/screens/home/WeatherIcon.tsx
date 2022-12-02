import React from 'react';
import {View, StyleSheet} from 'react-native';
import Sun from '../../icons/sunBg.svg';
import Cloud from '../../icons/cloudBase.svg';
import {CEMENT} from '../../utils/Colors';

const WeatherIcon = () => (
  <View>
    <Sun width={8.5} height={7.5} style={styles.sun} />
    <Cloud width={18} height={11} style={styles.cloud} />
  </View>
);

const styles = StyleSheet.create({
  sun: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: CEMENT,
  },
  cloud: {
    position: 'absolute',
  },
});

export default WeatherIcon;
