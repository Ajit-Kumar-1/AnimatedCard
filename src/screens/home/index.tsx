import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import {CONTAINER} from '../../utils/Styles';
import {HEREWORKS} from '../../utils/Strings';
import Card from './components/Card';
import {CEMENT} from '../../utils/Colors';

const HomeScreen = () => (
  <SafeAreaView style={CONTAINER}>
    <Text style={styles.title}>{HEREWORKS}</Text>
    <Card />
  </SafeAreaView>
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
