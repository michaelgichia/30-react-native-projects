import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  updateCity,
} from '../SearchInput/actions';

const { searchSn, tOStyles, autoCompStyles, tOStylesText, loader } = styles;

class SearchScreen extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    cities: PropTypes.array.isRequired,
    handleSearchInput: PropTypes.func.isRequired,
    updateCity: PropTypes.func.isRequired,
    clearCities: PropTypes.func.isRequired,
    closeKeyboard: PropTypes.func.isRequired,
    fetchWeather: PropTypes.func.isRequired,
  };

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
    this.props.updateCity(cityObject[0]);
    this.props.clearCities();
    this.props.closeKeyboard();
    this.props.fetchWeather(id);
  };

  _sortCities = cities =>
    cities.sort((a, b) => {
      if (a.name.toUpperCase() < b.name.toUpperCase()) {
        return -1;
      }
      if (a.name.toUpperCase() > b.name.toUpperCase()) {
        return 1;
      }
      return 0;
    });

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
            cities.map(dt => (
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
  updateCity: cityObject => dispatch(updateCity(cityObject)),
});

const mapStateToProps = ({ search }) => ({
  cities: search.cities,
  isFetching: search.isFetching,
  weather: search.weather,
});
export default connect(mapStateToProps, mapDisptchToProps)(SearchScreen);
