import React from 'react';
import {Text, StyleSheet, Platform, TextStyle} from 'react-native';
import {CEMENT} from '../utils/Colors';

const isIOS = Platform.OS === 'ios';

interface LabelProps {
  children: string;
  style?: TextStyle;
  bold?: boolean;
}

const Label = (props: LabelProps) => (
  <Text style={[props.bold ? styles.bold : styles.medium, props.style]}>
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
});

export default Label;
