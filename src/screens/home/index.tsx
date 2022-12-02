import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import {CONTAINER} from '../../utils/Styles';
import {HEREWORKS, HERE_ARE_YOUR_LATEST_UPDATES} from '../../utils/Strings';
import Card from './components/Card';
import {CEMENT, WHITE} from '../../utils/Colors';

const HomeScreen = () => (
  <View style={CONTAINER}>
    <View style={styles.mainSection}>
      <SafeAreaView>
        <Text style={styles.title}>{HEREWORKS}</Text>
        <View style={styles.welcomeSection}>
          <Text style={styles.greeting}>Hi Derek 👋</Text>
          <Text style={styles.latestUpdatesText}>
            {HERE_ARE_YOUR_LATEST_UPDATES}
          </Text>
        </View>
        <Card weekData={[64, 47, 55, 62, 60, 64, 62]} />
      </SafeAreaView>
    </View>
  </View>
);

const styles = StyleSheet.create({
  title: {
    color: CEMENT,
    marginStart: 24,
    marginTop: 19,
    marginBottom: 26,
    fontWeight: '900',
    fontSize: 28,
    lineHeight: 36,
  },
  mainSection: {
    backgroundColor: WHITE,
  },
  welcomeSection: {
    marginHorizontal: 24,
  },
  greeting: {
    fontSize: 22,
    lineHeight: 30,
    fontWeight: '900',
    color: CEMENT,
  },
  latestUpdatesText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
  },
});

export default HomeScreen;
