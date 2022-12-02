import React from 'react';
import {View, StyleSheet} from 'react-native';
import ArrowAxis from '../../../icons/arrow_horizontal_axis.svg';
import ArrowHead from '../../../icons/arrow_right.svg';

const ArrowIcon = () => (
  <View style={styles.container}>
    <ArrowAxis />
    <ArrowHead style={styles.arrowHead} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginStart: 4,
  },
  arrowHead: {
    position: 'absolute',
    end: 0,
    alignSelf: 'center',
  },
});

export default ArrowIcon;
