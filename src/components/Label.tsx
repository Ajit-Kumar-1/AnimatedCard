import React from 'react';
import {Text, StyleSheet, FlexStyle} from 'react-native';

interface LabelProps {
  children: string;
  style?: FlexStyle;
}

const Label = (props: LabelProps) => (
  <Text style={props.style}>{props.children}</Text>
);

const styles = StyleSheet.create({});

export default Label;
