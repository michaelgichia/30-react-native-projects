import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles, { itemWidth } from './styles';

/*
 * Constants
*/
const {
  sliderWrap,
  tips,
  citiName,
  timeName,
  horizontal,
  verticalScrollView,
  dayOfWeek,
  dayTemps,
  dayDesc,
} = styles;

export default class DailyDataSlider extends PureComponent {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };
  render() {
    const { data } = this.props;
    return (
      <View style={sliderWrap}>
        <View style={tips}>
          <Text style={citiName}>More information</Text>
        </View>
        <ScrollView style={verticalScrollView} key={`scroll${Math.random}`} horizontal>
          {data.length > 0 &&
            data.map(({ name, value, icon, color }, i) => (
              <View key={i} style={horizontal}>
                <Ionicons name={icon} size={itemWidth * 0.4} color={color} />
                <Text style={dayTemps}>{value}</Text>
                <Text style={dayDesc}>{name}</Text>
              </View>
            ))}
        </ScrollView>
      </View>
    );
  }
}
