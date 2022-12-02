import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {CEMENT, LIGHT_BLUE, PINK} from '../../../utils/Colors';
import {
  FIND_OUT_WHY,
  HAPPY_SCORE,
  LIVE_UPPERCASE,
} from '../../../utils/Strings';

const Card = () => (
  <View style={styles.container}>
    <View style={styles.mainSection}>
      <View style={styles.titleSection}>
        <Text style={styles.title}>{HAPPY_SCORE}</Text>
        <Text style={styles.liveText}>{LIVE_UPPERCASE}</Text>
      </View>
      <TouchableOpacity style={styles.titleSection}>
        <Text style={styles.findOutWhyText}>{FIND_OUT_WHY}</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainSection: {},
  titleSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '900',
    color: CEMENT,
  },
  liveText: {
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '500',
    color: PINK,
    marginStart: 5,
  },
  findOutWhyText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    color: LIGHT_BLUE,
    borderBottomColor: LIGHT_BLUE,
    borderBottomWidth: 1,
  },
});

export default Card;
