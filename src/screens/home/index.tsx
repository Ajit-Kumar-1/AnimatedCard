import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Animated,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HEREWORKS, HERE_ARE_YOUR_LATEST_UPDATES} from '../../utils/Strings';
import Card from './components/card';
import {SCREEN_BACKGROUND, SHADOW, WHITE} from '../../utils/Colors';
import WeatherIcon from './components/WeatherIcon';
import ContentItem from './components/ContentItem';
import ScreenBackground from '../../components/ScreenBackground';
import Label from '../../components/Label';

const temperature = 24;
const name = 'Derek';
const weekData = [64, 47, 55, 62, 60, 64, 62];
const todayScore = 89;
const labels = ['We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu'];
const animatedValue = new Animated.Value(0);
const Timing = Animated.timing(animatedValue, {
  duration: 500,
  useNativeDriver: false,
  toValue: 1,
});

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [score, setScore] = useState(0);
  const onRefresh = () => {
    setRefreshing(true);
    const timeout = setTimeout(() => {
      Timing.reset();
      Timing.start();
      setRefreshing(false);
      clearTimeout(timeout);
    }, 1000);
  };

  useEffect(() => {
    Timing.start();
    animatedValue.addListener(response =>
      setScore(parseInt(response.value * todayScore + '', 10)),
    );
  }, []);

  return (
    <ScreenBackground style={styles.background}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            progressViewOffset={useSafeAreaInsets().top * 0.8}
            style={{marginBottom: useSafeAreaInsets().top}}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
        <View style={styles.mainSection}>
          <SafeAreaView>
            <Label bold style={styles.title}>
              {HEREWORKS}
            </Label>
            <View style={styles.welcomeSection}>
              <View>
                <Label bold style={styles.greeting}>{`Hi ${name} 👋`}</Label>
                <Label style={styles.latestUpdatesText}>
                  {HERE_ARE_YOUR_LATEST_UPDATES}
                </Label>
              </View>
              <View style={styles.weatherSection}>
                <Label bold>{`${temperature}°`}</Label>
                <WeatherIcon />
              </View>
            </View>
            <Card
              animatedValue={animatedValue}
              score={score}
              barChartData={weekData}
              barChartLabels={labels}
            />
          </SafeAreaView>
        </View>
        <ContentItem />
      </ScrollView>
    </ScreenBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: WHITE,
  },
  scrollView: {
    backgroundColor: SCREEN_BACKGROUND,
    flex: 1,
  },
  title: {
    marginHorizontal: 24,
    marginTop: 19,
    marginBottom: 26,
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
  },
  latestUpdatesText: {
    marginTop: 4,
  },
  weatherSection: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    marginEnd: 10,
  },
});

export default HomeScreen;
