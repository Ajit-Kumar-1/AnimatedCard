import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Label from '../../../../components/Label';
import {
  ASH,
  BLACK,
  CEMENT_BLUE,
  DARK_BLUE,
  GOLD,
  LIGHT_BLUE,
  PINK,
} from '../../../../utils/Colors';
import {
  FIND_OUT_WHY,
  HAPPY_SCORE,
  LIVE_UPPERCASE,
} from '../../../../utils/Strings';
import ArrowIcon from './components/ArrowIcon';

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
    <View style={styles.barColumnMainSection}>
      <View style={styles.barBase}>
        <View
          style={[
            styles.bar,
            {
              height: props.value,
              backgroundColor: props.isCurrent ? PINK : GOLD,
            },
          ]}
        />
      </View>
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
    <Label bold style={styles.pieChartText}>
      {props.value.toString()}
    </Label>
  </View>
);

const Card = (props: CardProps) => (
  <View style={styles.container}>
    <View>
      <View style={styles.titleSection}>
        <Label bold>{HAPPY_SCORE}</Label>
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
    paddingHorizontal: 21,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleSection: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginTop: 28,
    marginBottom: 11,
    marginStart: 2,
  },
  barColumn: {
    alignItems: 'center',
    marginEnd: 8,
  },
  barColumnMainSection: {
    alignItems: 'center',
  },
  barBase: {
    height: 70,
    width: 6,
    justifyContent: 'flex-end',
  },
  bar: {
    borderRadius: 4,
  },
  barText: {
    marginTop: 5,
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
    marginStart: 3,
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
    color: CEMENT_BLUE,
  },
});

export default Card;
