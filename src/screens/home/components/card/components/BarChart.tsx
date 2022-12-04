import React from 'react';
import {View, StyleSheet, FlexStyle, Animated} from 'react-native';
import Label from '../../../../../components/Label';
import {BLACK, DARK_BLUE, GOLD, PINK} from '../../../../../utils/Colors';

interface BarProps {
  value: number;
  text: string;
  isCurrent?: boolean;
  animatedValue: Animated.Value;
}

interface BarChartProps {
  data: number[];
  labels: string[];
  style?: FlexStyle;
  animatedValue: Animated.Value;
}

const Bar: (props: BarProps) => JSX.Element = (props: BarProps) => {
  const height = props.animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, props.value],
  });
  return (
    <View style={styles.barColumn}>
      <View style={styles.barColumnMainSection}>
        <View style={styles.barBase}>
          <Animated.View
            style={[
              styles.bar,
              {
                height: height,
                backgroundColor: props.isCurrent ? PINK : GOLD,
              },
            ]}
          />
        </View>
        <Label
          medium
          style={[
            styles.barText,
            {color: props.isCurrent ? DARK_BLUE : BLACK},
          ]}>
          {props.text}
        </Label>
      </View>
      {props.isCurrent ? <View style={styles.currentBarMarker} /> : null}
    </View>
  );
};

const BarChart: (props: BarChartProps) => JSX.Element = (
  props: BarChartProps,
) => (
  <View style={[styles.barChartSection, props.style]}>
    {props.data.map((item, index) => (
      <Bar
        animatedValue={props.animatedValue}
        key={`bar_${index}`}
        value={item}
        text={props.labels[index]}
        isCurrent={index === 6}
      />
    ))}
  </View>
);

const styles: any = StyleSheet.create({
  barChartSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
});

export default BarChart;
