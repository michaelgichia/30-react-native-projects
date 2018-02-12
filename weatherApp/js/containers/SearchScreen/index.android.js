import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
  Text,
  Animated,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { colors, sizes, fonts } from '../../CommonStyles';
import SearchInput from '../SearchInput';
import styles from './styles';
import data from '../SearchInput/data';
import {
  handleSearchInput,
  clearCities,
  closeKeyboard,
  fetchWeather,
} from '../SearchInput/actions';

const { searchSn, tOStyles, autoCompStyles, tOStylesText, loader } = styles;

class SearchScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: <SearchInput onPress={() => navigation.goBack()} />,
    };
  };

  state = {};

  _animatedValue = new Animated.Value(0);

  _keyExtractor = (item, index) => item.id;

  _onPressItem = id => {
    const cityObject = data.filter(x => id === x.id);
    this.props.handleSearchInput(cityObject[0].name);
    this.props.clearCities();
    this.props.closeKeyboard();
    this.props.fetchWeather(id);
  };

  render() {
    const { cities, isFetching, weather } = this.props;
    if (isFetching) {
      return (
        <View style={loader}>
          <ActivityIndicator size="large" color={colors.light} />
        </View>
      );
    }
    return (
      <View style={searchSn}>
        <View style={autoCompStyles}>
          {cities.length > 0 &&
            cities.slice(0, 5).map(dt => (
              <TouchableOpacity
                style={tOStyles}
                onPress={() => this._onPressItem(dt.id)}
                key={dt.id}
              >
                <View>
                  <Text style={tOStylesText}>{dt.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
        </View>
      </View>
    );
  }
}

const mapDisptchToProps = dispatch => ({
  handleSearchInput: city => dispatch(handleSearchInput(city)),
  clearCities: () => dispatch(clearCities()),
  closeKeyboard: () => dispatch(closeKeyboard()),
  fetchWeather: cityId => dispatch(fetchWeather(cityId)),
});

const mapStateToProps = ({ search }) => ({
  cities: search.cities,
  isFetching: search.isFetching,
  weather: search.weather,
});
export default connect(mapStateToProps, mapDisptchToProps)(SearchScreen);
