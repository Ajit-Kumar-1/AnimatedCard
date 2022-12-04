import React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import {BOTTOM_LINE, SCREEN_BACKGROUND} from '../utils/Colors';

interface ScreenContainerProps {
  style?: ViewStyle;
  children?: Element;
}

const ScreenBackground: (props: ScreenContainerProps) => JSX.Element = (
  props: ScreenContainerProps,
) => (
  <View style={[styles.container, props.style]}>
    <>
      {props.children}
      <View style={styles.bottomLine} />
    </>
  </View>
);

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SCREEN_BACKGROUND,
  },
  bottomLine: {
    position: 'absolute',
    bottom: 4,
    height: 1,
    width: '88%',
    alignSelf: 'center',
    backgroundColor: BOTTOM_LINE,
  },
});

export default ScreenBackground;
