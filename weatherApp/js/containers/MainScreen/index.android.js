import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { StatusBar, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
// Our components
import WeeklyDataSlider from '../../components/WeeklyDataSlider';
import DailyDataSlider from '../../components/DailyDataSlider';
import { HeaderRight, HeaderTitle, HeaderLeft } from '../../components/AppBar';
import weatherIcons from '../../utils/weatherIcons';
import { colors, sizes } from '../../CommonStyles';
import styles from './styles';

/*
 * Constants
*/
const headerStyle = {
  backgroundColor: colors.primary,
  paddingHorizontal: sizes.BODY_PADDING,
};
const fahrenheit = 459.67;
const celcius = 273.15;
const {
  container,
  appBarStyles,
  appBarTitle,
  appBarSearch,
  appBarMenu,
  container2,
  contentStyle,
  temparatureStyle,
  temparatureWrapStyle,
  desc,
  descTwo,
  descStyle,
  temps,
} = styles;

class MainScreen extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: <HeaderTitle />,
      headerRight: <HeaderRight onPress={() => navigation.navigate('Search')} />,
      headerLeft: <HeaderLeft />,
      headerStyle: headerStyle,
    };
  };

  state = {
    searchValue: '',
    conversion: celcius,
  };

  _handleSearchChange = searchValue => {
    this.setState({ searchValue });
  };

  render() {
    const { searchValue, conversion } = this.state;
    const { today } = this.props;
    const { temp: { day }, weather } = today;
    const description = weather[0].description;
    const icon = weather[0].icon.slice(0, 2);
    const todayOverview = [
      {
        name: 'Wind speed',
        value: today.speed,
        icon: 'ios-speedometer',
        color: colors.primaryContrast,
      },
      { name: 'Temperature', value: today.deg, icon: 'ios-sunny', color: colors.sun },
      { name: 'Humidity', value: today.humidity, icon: 'ios-snow', color: colors.secondaryDark },
      { name: 'Clouds', value: today.clouds, icon: 'ios-cloud', color: colors.secondaryContrast },
    ];
    return (
      <React.Fragment>
        <StatusBar backgroundColor="#3b374b" barStyle="light-content" />
        <ScrollView style={container}>
          <View style={container2} />
          <View style={contentStyle}>
            <View style={temparatureWrapStyle}>
              <Text style={temparatureStyle}>{`${(day - conversion).toFixed(2)}°`}</Text>
            </View>
            {weatherIcons(icon, false)}
          </View>
          <View style={desc}>
            <View style={descTwo}>
              <TouchableOpacity
                onPress={() => this.setState(() => ({ conversion: celcius }))}
                style={temps}
              >
                <Text
                  style={[
                    descStyle,
                    {
                      color:
                        this.state.conversion < 300
                          ? 'rgb(232, 232, 232)'
                          : 'rgba(232, 232, 232, .3)',
                    },
                  ]}
                >
                  °C
                </Text>
              </TouchableOpacity>
              <View
                style={{ borderColor: 'red', borderWidth: 1, borderStyle: 'solid', marginLeft: 8 }}
              />
              <TouchableOpacity
                onPress={() => this.setState(() => ({ conversion: fahrenheit }))}
                style={temps}
              >
                <Text
                  style={[
                    descStyle,
                    {
                      color:
                        this.state.conversion > 300
                          ? 'rgb(232, 232, 232)'
                          : 'rgba(232, 232, 232, .3)',
                    },
                  ]}
                >
                  °F
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={[descStyle, { color: 'rgb(232, 232, 232)' }]}>{description}</Text>
            </View>
          </View>
          <WeeklyDataSlider cityName={this.props.cityObject.name} data={this.props.weather} />
          <DailyDataSlider data={todayOverview} />
        </ScrollView>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ search }) => ({
  today: search.today,
  weather: search.weather,
  cityObject: search.cityObject,
});

export default connect(mapStateToProps)(MainScreen);
