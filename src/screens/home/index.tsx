import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {CONTAINER} from '../../utils/Styles';
import {HEREWORKS} from '../../utils/Strings';
import Card from './components/Card';
import {CEMENT} from '../../utils/Colors';

const HomeScreen = () => (
  <View style={CONTAINER}>
    <Text style={styles.title}>{HEREWORKS}</Text>
    <Card />
  </View>
);

const styles = StyleSheet.create({
  title: {
    color: CEMENT,
    marginStart: 24,
    marginTop: 19,
    fontWeight: '900',
    fontSize: 28,
    lineHeight: 36,
  },
});

export default HomeScreen;
