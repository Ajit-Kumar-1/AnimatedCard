import React from 'react';
import {Text, StyleSheet, FlexStyle, Platform} from 'react-native';
import {CEMENT} from '../utils/Colors';

const isIOS = Platform.OS === 'ios';

interface LabelProps {
  children: string;
  style?: FlexStyle;
  bold?: boolean;
}

const Label = (props: LabelProps) => (
  <Text style={[props.bold ? styles.bold : styles.regular, props.style]}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  bold: {
    fontFamily: isIOS ? 'Roboto' : 'Roboto-Bold',
    color: CEMENT,
  },
  regular: {
    fontFamily: isIOS ? 'Roboto' : 'Roboto-Regular',
    color: CEMENT,
    fontSize: 12,
    lineHeight: 20,
  },
});

export default Label;
