import React, { PureComponent } from 'react';
import PropType from 'prop-types';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { colors, fonts, sizes } from '../../CommonStyles';
import {
  Fewclouds,
  Clearsky,
  Scatteredclouds,
  Brokenclouds,
  Showerrain,
  Rain,
  Thunderstorm,
  Snow,
} from '../WeatherCondition';

const NUM_OF_DAYS = 7;
// Celsius (°C) 273.15.
// Fahrenheit (°F) -459.67

export default class Slider extends PureComponent {
  generateItems = (nItems, styles) => {
    const items = [];
    for (var i = 0; i < nItems; i++) {
      items[i] = (
        <TouchableOpacity activeOpacity={0.9} key={i} style={styles}>
          <Text style={dayOfWeek}>{'Today ' + i}</Text>
          <Snow isSmall />
          <Text style={dayTemps}>32° / 15°C</Text>
          <Text style={dayDesc}>Mostly Sunny</Text>
        </TouchableOpacity>
      );
    }
    return items;
  };

  render() {
    return (
      <View style={sliderWrap}>
        <View style={tips}>
          <Text style={citiName}>Nairobi, Kenya</Text>
          <Text style={timeName}>12:30 PM</Text>
        </View>
        <ScrollView
          style={verticalScrollView}
          key={`scrollOne${Math.random}`}
          horizontal
          snapToInterval={itemWidth}
        >
          {this.generateItems(NUM_OF_DAYS, horizontalPagingItemWrapper)}
        </ScrollView>
      </View>
    );
  }
}

const itemWidth = (sizes.width - sizes.BODY_PADDING) / 2.5; // To get two and one partially visible item
const itemHeight = itemWidth / 3 * 4; // maintain 3:4 ratio.

const styles = StyleSheet.create({
  sliderWrap: {
    width: '100%',
    marginTop: sizes.BODY_PADDING * 3,
  },
  tips: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: sizes.BODY_PADDING,
  },
  citiName: {
    fontSize: fonts.subHeading,
    color: colors.primaryLight,
    paddingRight: sizes.BODY_PADDING,
  },
  timeName: {
    fontSize: fonts.main,
    color: colors.primaryLight,
  },
  horizontalPagingItemWrapper: {
    width: itemWidth,
    height: itemHeight,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: sizes.PADDING,
    margin: sizes.PADDING,
    justifyContent: 'space-between',
    overflow: 'hidden',
    position: 'relative',
    zIndex: -20,
  },
  verticalScrollView: {
    marginTop: sizes.PADDING,
  },
  dayOfWeek: {
    color: colors.primaryDark,
    fontSize: fonts.main,
  },
  dayTemps: {
    alignSelf: 'center',
    fontSize: 28,
    color: colors.primaryDark,
  },
  dayDesc: {
    color: 'rgb(66,61,86)',
    fontSize: fonts.main,
    alignSelf: 'center',
  },
});
const {
  sliderWrap,
  tips,
  citiName,
  timeName,
  horizontalPagingItemWrapper,
  verticalScrollView,
  dayOfWeek,
  dayTemps,
  dayDesc,
} = styles;
