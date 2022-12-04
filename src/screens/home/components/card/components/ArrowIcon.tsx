import React from 'react';
import {View, StyleSheet, FlexStyle} from 'react-native';
import ArrowAxis from '../../../../../../assets/icons/arrow_horizontal_axis.svg';
import ArrowHead from '../../../../../../assets/icons/arrow_right.svg';

interface ArrowIconProps {
  style?: FlexStyle;
}

const ArrowIcon: (props: ArrowIconProps) => JSX.Element = (
  props: ArrowIconProps,
) => (
  <View style={[{...props.style}, styles.container]}>
    <ArrowAxis />
    <ArrowHead style={styles.arrowHead} />
  </View>
);

const styles: any = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginStart: 4,
  },
  arrowHead: {
    position: 'absolute',
    end: 0,
    alignSelf: 'center',
  },
});

export default ArrowIcon;
