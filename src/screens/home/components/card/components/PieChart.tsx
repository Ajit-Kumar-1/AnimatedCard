import React from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import Svg, {Defs, LinearGradient, Stop, Path} from 'react-native-svg';
import Label from '../../../../../components/Label';
import {ASH, CEMENT_BLUE} from '../../../../../utils/Colors';

const size = 108;
const strokeWidth = 12;
const AnimatedPath = Animated.createAnimatedComponent(Path);
const {PI, cos, sin} = Math;
const r = (size - strokeWidth) / 2;
const cx = size / 2;
const cy = size / 2;
const A = PI * 2;
const startAngle = PI * 0.5;
const endAngle = PI * 0.501;
const x1 = cx - r * cos(startAngle);
const y1 = -r * sin(startAngle) + cy;
const x2 = cx - r * cos(endAngle);
const y2 = -r * sin(endAngle) + cy;
const d = `M ${x1} ${y1} A ${r} ${r} 0 1 0 ${x2} ${y2}`;

interface PieChartProps {
  value: number;
  animation: Animated.Value;
}

const Arc = (props: PieChartProps) => {
  const circumference = r * A;
  const α = props.animation.interpolate({
    inputRange: [0, 140 / props.value],
    outputRange: [A, 0],
  });
  const strokeDashoffset = Animated.multiply(α, -r);
  return (
    <Svg width={size} height={size} style={styles.arc}>
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
          <Stop offset="0" stopColor="#F5B335FF" />
          <Stop offset="1" stopColor="#F5B3358A" />
        </LinearGradient>
      </Defs>
      <AnimatedPath
        stroke="url(#grad)"
        strokeLinecap="round"
        fill="none"
        strokeDasharray={`${circumference}, ${circumference}`}
        {...{d, strokeDashoffset, strokeWidth}}
      />
    </Svg>
  );
};

const PieChart = (props: PieChartProps) => (
  <View style={styles.pieChartBackground}>
    <Arc {...props} />
    <Label bold style={styles.pieChartText}>
      {props.value.toString()}
    </Label>
  </View>
);

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
  arc: {
    position: 'absolute',
  },
  pieChartText: {
    fontSize: 34,
    lineHeight: 42,
    color: CEMENT_BLUE,
  },
});

export default PieChart;
