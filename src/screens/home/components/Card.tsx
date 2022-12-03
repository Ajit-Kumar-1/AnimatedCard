import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Label from '../../../components/Label';
import {
  ASH,
  BLACK,
  CEMENT,
  DARK_BLUE,
  GOLD,
  LIGHT_BLUE,
  PINK,
} from '../../../utils/Colors';
import {
  FIND_OUT_WHY,
  HAPPY_SCORE,
  LIVE_UPPERCASE,
} from '../../../utils/Strings';
import ArrowIcon from './ArrowIcon';

interface CardProps {
  weekData: number[];
  labels: string[];
}

interface BarProps {
  value: number;
  text: string;
  isCurrent: boolean;
}

interface PieChartProps {
  value: number;
}

const Bar = (props: BarProps) => (
  <View style={styles.barColumn}>
    <View style={styles.barContainer}>
      <View
        style={[
          styles.bar,
          {
            height: props.value + '%',
            backgroundColor: props.isCurrent ? PINK : GOLD,
          },
        ]}
      />
      <Label
        medium
        style={[styles.barText, {color: props.isCurrent ? DARK_BLUE : BLACK}]}>
        {props.text}
      </Label>
    </View>
    {props.isCurrent ? <View style={styles.currentBarMarker} /> : null}
  </View>
);

const PieChart = (props: PieChartProps) => (
  <View style={styles.pieChartBackground}>
    <Text style={styles.pieChartText}>{props.value.toString()}</Text>
  </View>
);

const Card = (props: CardProps) => (
  <View style={styles.container}>
    <View>
      <View style={styles.titleSection}>
        <Text style={styles.title}>{HAPPY_SCORE}</Text>
        <Label medium style={styles.liveText}>
          {LIVE_UPPERCASE}
        </Label>
      </View>
      <View style={styles.barChartSection}>
        {props.weekData.map((item, index) => (
          <Bar
            key={`bar_${index}`}
            value={item}
            text={props.labels[index]}
            isCurrent={index === 6}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.titleSection}>
        <View style={styles.findOutWhyTextContainer}>
          <Label style={styles.findOutWhyText}>{FIND_OUT_WHY}</Label>
        </View>
        <ArrowIcon style={styles.arrowIcon} />
      </TouchableOpacity>
    </View>
    <PieChart value={89} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    fontFamily: 'Roboto',
  },
  liveText: {
    color: PINK,
    marginStart: 5,
    alignSelf: 'center',
    top: 1,
  },
  barChartSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 18,
    marginBottom: 12,
    marginStart: 2,
  },
  barColumn: {
    alignItems: 'center',
    marginEnd: 8,
  },
  barContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 100,
  },
  bar: {
    borderRadius: 4,
    width: 6,
  },
  barText: {
    fontSize: 12,
    lineHeight: 20,
    color: BLACK,
  },
  currentBarMarker: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: PINK,
  },
  findOutWhyTextContainer: {
    borderBottomColor: LIGHT_BLUE,
    borderBottomWidth: 1,
  },
  findOutWhyText: {
    color: LIGHT_BLUE,
  },
  arrowIcon: {
    marginTop: 4,
  },
  pieChartBackground: {
    height: 108,
    width: 108,
    borderRadius: 54,
    borderWidth: 12,
    borderColor: ASH + '4C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pieChartText: {
    fontSize: 34,
    lineHeight: 42,
    fontWeight: '900',
    color: DARK_BLUE,
    fontFamily: 'Roboto',
  },
});

export default Card;
