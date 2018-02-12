import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors, fonts, sizes } from '../../CommonStyles';

const NUM_ITEMS = 4;
// Celsius (°C) 273.15.
// Fahrenheit (°F) -459.67

// speed: 9.21,
// deg: 272,
// clouds: 32,
// snow: 0.15,
// ios-speedometer
// ios-sunny
// ios-snow
// ios-cloud
export default class SliderTwo extends PureComponent {
  state = {
    weather: [],
  };
  generateItems = (nItems, styles) => {
    const items = [];
    for (var i = 0; i < nItems; i++) {
      items[i] = (
        <View key={i} style={styles}>
          <Ionicons name="ios-snow" size={itemWidth * 0.4} color={colors.primary} />
          <Text style={dayTemps}>9.21</Text>
          <Text style={dayDesc}>Wind Speed</Text>
        </View>
      );
    }
    return items;
  };

  render() {
    return (
      <View style={sliderWrap}>
        <View style={tips}>
          <Text style={citiName}>More information</Text>
        </View>
        <ScrollView style={verticalScrollView} key={`scroll${Math.random}`} horizontal>
          {this.generateItems(NUM_ITEMS, horizontalPagingItemWrapper)}
        </ScrollView>
      </View>
    );
  }
}

const itemWidth = (sizes.width - sizes.BODY_PADDING) / 3.5;
const styles = StyleSheet.create({
  sliderWrap: {
    width: '100%',
    marginBottom: sizes.BODY_PADDING,
  },
  tips: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32,
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
    height: itemWidth,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: sizes.PADDING,
    marginBottom: sizes.PADDING,
    marginLeft: sizes.PADDING,
    marginRight: sizes.PADDING,
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
    zIndex: -20,
  },
  verticalScrollView: {
    marginTop: sizes.PADDING,
  },
  dayOfWeek: {
    color: colors.primary,
    fontSize: fonts.main,
  },
  dayTemps: {
    alignSelf: 'center',
    fontSize: 28,
    color: colors.primary,
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
