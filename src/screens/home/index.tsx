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
import {
  HEREWORKS,
  HERE_ARE_YOUR_LATEST_UPDATES,
} from '../../utils/LocalizableStrings';
import Card from './components/card';
import {SCREEN_BACKGROUND, SHADOW, WHITE} from '../../utils/Colors';
import WeatherIcon from './components/WeatherIcon';
import ContentItem from './components/ContentItem';
import ScreenBackground from '../../components/ScreenBackground';
import Label from '../../components/Label';
import {Easing} from 'react-native';

const temperature = 24;
const name = 'Derek';
const weekData = [64, 47, 55, 62, 60, 64, 62];
const todayScore = 89;
const labels = ['We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu'];

const primaryAnimationValue = new Animated.Value(0);
const secondaryAnimationValue = new Animated.Value(0);
const tertiaryAnimationValue = new Animated.Value(0);
const primaryAnimationDuration = 500;
const secondaryAnimationDuration = 400;
const tertiaryAnimationDuration = 400;
const primaryAnimation = Animated.timing(primaryAnimationValue, {
  duration: primaryAnimationDuration,
  useNativeDriver: false,
  easing: time => Easing.ease(time),
  toValue: 1,
});
const secondaryAnimation = Animated.timing(secondaryAnimationValue, {
  duration: secondaryAnimationDuration,
  useNativeDriver: false,
  toValue: 1,
});
const tertiaryAnimation = Animated.timing(tertiaryAnimationValue, {
  duration: tertiaryAnimationDuration,
  useNativeDriver: false,
  toValue: 1,
});

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [primaryAnimationListenerValue, secondaryAnimationListenerValue] =
    useState(0);

  const startAnimations = () => {
    Animated.sequence([
      primaryAnimation,
      secondaryAnimation,
      tertiaryAnimation,
    ]).start();
    primaryAnimationValue.addListener(response =>
      secondaryAnimationListenerValue(response.value),
    );
  };

  const stopAnimations = () => {
    tertiaryAnimation.reset();
    secondaryAnimation.reset();
    primaryAnimation.reset();
    tertiaryAnimationValue.removeAllListeners();
    secondaryAnimationValue.removeAllListeners();
    primaryAnimationValue.removeAllListeners();
  };

  const onRefresh = () => {
    setRefreshing(true);
    const timeout = setTimeout(() => {
      stopAnimations();
      startAnimations();
      setRefreshing(false);
      clearTimeout(timeout);
    }, 1000);
  };

  const handWaveAngle = tertiaryAnimationValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '60deg', '0deg'],
  });

  useEffect(() => {
    startAnimations();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      stopAnimations();
      clearTimeout(timeout);
    }, primaryAnimationDuration + secondaryAnimationDuration + tertiaryAnimationDuration);
  }, []);

  return (
    <ScreenBackground style={styles.background}>
      <ScrollView
        overScrollMode="never"
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            progressViewOffset={useSafeAreaInsets().top * 0.8}
            style={{marginBottom: useSafeAreaInsets().top * 0.6}}
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
                <View style={styles.greetingSection}>
                  <Label bold style={styles.greeting}>{`Hi ${name} `}</Label>
                  <Label
                    animated
                    bold
                    style={[
                      styles.greeting,
                      {transform: [{rotate: handWaveAngle}]},
                    ]}>
                    {'👋'}
                  </Label>
                </View>
                <Label style={styles.latestUpdatesText}>
                  {HERE_ARE_YOUR_LATEST_UPDATES}
                </Label>
              </View>
              <View style={styles.weatherSection}>
                <Label bold>{`${temperature}°`}</Label>
                <WeatherIcon
                  primaryAnimatedValue={secondaryAnimationValue}
                  secondaryAnimatedValue={tertiaryAnimationValue}
                />
              </View>
            </View>
            <Card
              animatedValue={primaryAnimationValue}
              animationListenerValue={primaryAnimationListenerValue}
              barChartData={weekData}
              barChartLabels={labels}
              pieChartScore={todayScore}
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
    minHeight: '100%',
  },
  title: {
    marginHorizontal: 24,
    marginTop: 19,
    marginBottom: 26,
    fontSize: 28,
    lineHeight: 36,
  },
  greetingSection: {
    flexDirection: 'row',
  },
  mainSection: {
    backgroundColor: WHITE,
    shadowColor: SHADOW,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 8,
    shadowOpacity: 0.06,
    elevation: 6,
  },
  welcomeSection: {
    marginHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
