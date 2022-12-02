import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CONTAINER} from '../../utils/Styles';

const HomeScreen = () => <View style={CONTAINER} />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
});

export default HomeScreen;
