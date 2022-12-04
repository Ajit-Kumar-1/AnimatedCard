import React from 'react';
import {View, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import Label from '../../../../components/Label';
import {LIGHT_BLUE, PINK} from '../../../../utils/Colors';
import {
  FIND_OUT_WHY,
  HAPPY_SCORE,
  LIVE_UPPERCASE,
} from '../../../../utils/Strings';
import ArrowIcon from './components/ArrowIcon';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';

interface CardProps {
  barChartData: number[];
  barChartLabels: string[];
  animatedValue: Animated.Value;
  animationListenerValue: number;
  pieChartScore: number;
}

const Card = (props: CardProps) => (
  <Animated.View style={[styles.container, {opacity: props.animatedValue}]}>
    <View>
      <View style={styles.titleSection}>
        <Label bold>{HAPPY_SCORE}</Label>
        <Label medium style={styles.liveText}>
          {LIVE_UPPERCASE}
        </Label>
      </View>
      <BarChart
        animatedValue={props.animatedValue}
        style={styles.barChart}
        data={props.barChartData}
        labels={props.barChartLabels}
      />
      <TouchableOpacity style={styles.titleSection}>
        <View style={styles.findOutWhyTextContainer}>
          <Label style={styles.findOutWhyText}>{FIND_OUT_WHY}</Label>
        </View>
        <ArrowIcon style={styles.arrowIcon} />
      </TouchableOpacity>
    </View>
    <PieChart
      animatedValue={props.animatedValue}
      animationListenerValue={props.animationListenerValue}
      score={props.pieChartScore}
    />
  </Animated.View>
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
  barChart: {
    marginTop: 28,
    marginBottom: 11,
    marginStart: 2,
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
});

export default Card;
