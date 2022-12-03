import React from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import Label from '../../../../../components/Label';
import {ASH, CEMENT_BLUE} from '../../../../../utils/Colors';
import Arc from './Arc';

interface PieChartProps {
  value: number;
}

const PieChart = (props: PieChartProps) => {
  const animatedValue = new Animated.Value(0);
  Animated.timing(animatedValue, {
    duration: 500,
    useNativeDriver: true,
    toValue: props.value,
  }).start();
  return (
    <View style={styles.pieChartBackground}>
      <Arc progress={animatedValue} />
      <Label bold style={styles.pieChartText}>
        {props.value.toString()}
      </Label>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default PieChart;
