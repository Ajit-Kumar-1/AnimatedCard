import React from 'react';
import {Text, StyleSheet, Platform, Animated} from 'react-native';
import {CEMENT} from '../utils/Colors';

const isIOS: boolean = Platform.OS === 'ios';

interface LabelProps {
  children: string;
  style?: any;
  bold?: boolean;
  medium?: boolean;
  animated?: boolean;
}

const Label: (props: LabelProps) => JSX.Element = (props: LabelProps) => {
  const TextComponent = props.animated ? Animated.Text : Text;
  return (
    <TextComponent
      style={[
        props.bold
          ? styles.bold
          : props.medium
          ? styles.medium
          : styles.regular,
        props.style,
      ]}>
      {props.children}
    </TextComponent>
  );
};

const styles: any = StyleSheet.create({
  bold: {
    fontFamily: isIOS ? 'Roboto' : 'Roboto-Bold',
    fontWeight: isIOS ? '900' : undefined,
    color: CEMENT,
    fontSize: 16,
    lineHeight: 24,
  },
  medium: {
    fontFamily: isIOS ? 'Roboto' : 'Roboto-Medium',
    fontWeight: isIOS ? '500' : undefined,
    color: CEMENT,
    fontSize: 12,
    lineHeight: 20,
  },
  regular: {
    fontFamily: isIOS ? 'Roboto' : 'Roboto-Regular',
    fontWeight: isIOS ? '400' : undefined,
    color: CEMENT,
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Label;
