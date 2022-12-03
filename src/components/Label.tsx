import React from 'react';
import {Text, StyleSheet, Platform, TextStyle} from 'react-native';
import {CEMENT} from '../utils/Colors';

const isIOS = Platform.OS === 'ios';

interface LabelProps {
  children: string;
  style?: TextStyle;
  bold?: boolean;
  medium?: boolean;
}

const Label = (props: LabelProps) => (
  <Text
    style={[
      props.bold ? styles.bold : props.medium ? styles.medium : styles.regular,
      props.style,
    ]}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  bold: {
    fontFamily: isIOS ? 'Roboto' : 'Roboto-Bold',
    fontWeight: isIOS ? '900' : undefined,
    color: CEMENT,
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
