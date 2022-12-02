import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import {CONTAINER} from '../../utils/Styles';
import {HEREWORKS, HERE_ARE_YOUR_LATEST_UPDATES} from '../../utils/Strings';
import Card from './Card';
import {CEMENT, SHADOW, WHITE} from '../../utils/Colors';
import WeatherIcon from './WeatherIcon';

const temperature = 24;
const name = 'Derek';

const HomeScreen = () => (
  <View style={CONTAINER}>
    <View style={styles.mainSection}>
      <SafeAreaView>
        <Text style={styles.title}>{HEREWORKS}</Text>
        <View style={styles.welcomeSection}>
          <View>
            <Text style={styles.greeting}>{`Hi ${name} 👋`}</Text>
            <Text style={styles.latestUpdatesText}>
              {HERE_ARE_YOUR_LATEST_UPDATES}
            </Text>
          </View>
          <View style={styles.weatherSection}>
            <Text style={styles.temperatureText}>{`${temperature}°`}</Text>
            <WeatherIcon />
          </View>
        </View>
        <Card
          weekData={[64, 47, 55, 62, 60, 64, 62]}
          labels={['We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu']}
        />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: SHADOW,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 8,
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
    marginTop: 4,
  },
  weatherSection: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  temperatureText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '900',
    color: CEMENT,
  },
});

export default HomeScreen;
