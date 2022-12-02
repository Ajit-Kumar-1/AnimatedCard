import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {CEMENT, GOLD, LIGHT_BLUE, PINK} from '../../../utils/Colors';
import {
  FIND_OUT_WHY,
  HAPPY_SCORE,
  LIVE_UPPERCASE,
} from '../../../utils/Strings';

interface CardProps {
  weekData: number[];
}

interface BarProps {
  value: number;
  text: string;
  isCurrent: boolean;
}

const Bar = (props: BarProps) => (
  <View style={styles.barContainer}>
    <View style={[styles.bar, {height: props.value + '%'}]} />
  </View>
);

const Card = (props: CardProps) => (
  <View style={styles.container}>
    <View style={styles.mainSection}>
      <View style={styles.titleSection}>
        <Text style={styles.title}>{HAPPY_SCORE}</Text>
        <Text style={styles.liveText}>{LIVE_UPPERCASE}</Text>
      </View>
      <View style={styles.barChartSection}>
        {props.weekData.map((item, index) => (
          <Bar value={item} text={item + ''} isCurrent={index === 6} />
        ))}
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
  mainSection: {
    flex: 0.6,
  },
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
  barChartSection: {
    flexDirection: 'row',
    height: 138,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    marginTop: 8,
  },
  barContainer: {
    alignItems: 'center',
  },
  bar: {
    borderRadius: 4,
    width: 6,
    backgroundColor: GOLD,
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
