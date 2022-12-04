import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {LIGHT_GRAY, PRIMARY_GRAY, WHITE} from '../../../utils/Colors';

const ContentItem: () => JSX.Element = () => (
  <View style={styles.container}>
    <View style={styles.topHalf}>
      <Image style={styles.image} />
      <View style={styles.textSection}>
        <View style={styles.textLine} />
        <View style={styles.textLine} />
        <View style={styles.textLine} />
        <View style={styles.textLine} />
        <View style={styles.textLine} />
      </View>
    </View>
    <View style={[styles.textLine, styles.bottomSectionLine]} />
    <View style={[styles.textLine, styles.bottomSectionLine]} />
  </View>
);

const styles: any = StyleSheet.create({
  container: {
    margin: 24,
    paddingTop: 28,
    paddingBottom: 14,
    paddingHorizontal: 12,
    backgroundColor: WHITE,
    borderColor: PRIMARY_GRAY,
    borderWidth: 1,
    borderRadius: 4,
  },
  topHalf: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  image: {
    backgroundColor: LIGHT_GRAY,
    width: 102,
    height: 93,
    marginEnd: 9,
  },
  textSection: {
    flex: 1,
    justifyContent: 'space-between',
  },
  textLine: {
    backgroundColor: LIGHT_GRAY,
    height: 13,
  },
  bottomSectionLine: {
    marginBottom: 8,
  },
});

export default ContentItem;
