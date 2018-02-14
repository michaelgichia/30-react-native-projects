import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import weatherIcons from '../../utils/weatherIcons';
import styles, { itemWidth } from './styles';

/*
 * Constants
*/

const {
  sliderWrap,
  tips,
  citiName,
  horizontal,
  verticalScrollView,
  dayOfWeek,
  dayTemps,
  dayDesc,
} = styles;
const NUM_OF_DAYS = 7;
const fahrenheit = 459.67;
const celcius = 273.15;

export default class WeeklyDataSlider extends PureComponent {
  static propTypes = {
    data: PropTypes.array.isRequired,
    cityName: PropTypes.string.isRequired,
  };

  _getDay = seconds => {
    const d = new Date(seconds * 1000);
    const weekday = new Array(7);
    weekday[0] = 'Sunday';
    weekday[1] = 'Monday';
    weekday[2] = 'Tuesday';
    weekday[3] = 'Wednesday';
    weekday[4] = 'Thursday';
    weekday[5] = 'Friday';
    weekday[6] = 'Saturday';
    return weekday[d.getDay()];
  };

  render() {
    const { data, cityName } = this.props;
    return (
      <View style={sliderWrap}>
        <View style={tips}>
          <Text style={citiName}>{cityName && cityName}</Text>
        </View>
        <ScrollView
          style={verticalScrollView}
          key={`scrollOne${Math.random}`}
          horizontal
          snapToInterval={itemWidth}
        >
          {data.length > 0 &&
            data.map(({ dt, temp: { day }, description, weather }, i) => (
              <TouchableOpacity activeOpacity={0.9} key={dt} style={horizontal}>
                <Text style={dayOfWeek}>{this._getDay(dt)}</Text>
                {weatherIcons(weather[0].icon.slice(0, 2), true)}
                <Text style={dayTemps}>{`${Math.round(day - celcius)}°C / ${Math.round(
                  day - fahrenheit,
                )}°F`}</Text>
                <Text style={dayDesc}>{weather[0].description}</Text>
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    );
  }
}
