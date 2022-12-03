import React from 'react';
import {View, StyleSheet, FlexStyle} from 'react-native';
import Label from '../../../../../components/Label';
import {BLACK, DARK_BLUE, GOLD, PINK} from '../../../../../utils/Colors';

interface BarProps {
  value: number;
  text: string;
  isCurrent?: boolean;
}

interface BarChartProps {
  data: number[];
  labels: string[];
  style?: FlexStyle;
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

const BarChart = (props: BarChartProps) => (
  <View style={[styles.barChartSection, props.style]}>
    {props.data.map((item, index) => (
      <Bar
        key={`bar_${index}`}
        value={item}
        text={props.labels[index]}
        isCurrent={index === 6}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
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
