import React from 'react';
import Svg, {Defs, LinearGradient, Stop, Path} from 'react-native-svg';
import {Animated, StyleSheet} from 'react-native';

const size = 108;
const strokeWidth = 12;
const AnimatedPath = Animated.createAnimatedComponent(Path);
const {PI, cos, sin} = Math;
const r = (size - strokeWidth) / 2;
const cx = size / 2;
const cy = size / 2;
const A = PI * 2;
const startAngle = PI * 0.5;
const endAngle = PI * 1;
// A rx ry x-axis-rotation large-arc-flag sweep-flag x y
const x1 = cx - r * cos(startAngle);
const y1 = -r * sin(startAngle) + cy;
const x2 = cx - r * cos(endAngle);
const y2 = -r * sin(endAngle) + cy;
const d = `M ${x1} ${y1} A ${r} ${r} 0 1 0 ${x2} ${y2}`;

interface CircularPogressProps {
  progress: Animated.Value;
}

export default ({progress}: CircularPogressProps) => {
  const circumference = r * A;
  const α = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, A],
  });
  const strokeDashoffset = Animated.multiply(α, r);
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

const styles = StyleSheet.create({
  arc: {
    position: 'absolute',
  },
});
