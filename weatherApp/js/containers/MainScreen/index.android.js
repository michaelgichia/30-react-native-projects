import React, { PureComponent } from 'react';
import { StyleSheet, StatusBar, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
// Our components
import Slider from '../../components/Slider';
import SliderTwo from '../../components/SliderTwo';
import { HeaderRight, HeaderTitle, HeaderLeft } from '../../components/AppBar';
import {
  Fewclouds,
  Clearsky,
  Scatteredclouds,
  Brokenclouds,
  Showerrain,
  Rain,
  Thunderstorm,
  Snow,
} from '../../components/WeatherCondition';
import { colors, fonts, sizes } from '../../CommonStyles';

const headerStyle = {
  backgroundColor: colors.primary,
  paddingHorizontal: sizes.BODY_PADDING,
};

export default class MainScreen extends PureComponent {
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
  };

  _handleSearchChange = searchValue => {
    this.setState({ searchValue });
  };

  render() {
    const { searchValue } = this.state;
    return (
      <React.Fragment>
        <StatusBar backgroundColor="#3b374b" barStyle="light-content" />

        <ScrollView style={container}>
          <View style={container2} />

          <View style={contentStyle}>
            <View style={temparatureWrapStyle}>
              <Text style={temparatureStyle}>32°</Text>
            </View>
            <Scatteredclouds />
          </View>

          <View style={desc}>
            <View style={descTwo}>
              <TouchableOpacity style={temps}>
                <Text style={descStyle}>°C</Text>
              </TouchableOpacity>
              <View
                style={{ borderColor: 'red', borderWidth: 1, borderStyle: 'solid', marginLeft: 8 }}
              />
              <TouchableOpacity style={temps}>
                <Text style={descStyle}>°F</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={descStyle}>Mostly Sunny</Text>
            </View>
          </View>

          <Slider />
          <SliderTwo />
        </ScrollView>
      </React.Fragment>
    );
  }
}

const HALF_WIDTH = 2;
const STATUS_BAR_HEIGHT = 24;
const SUNNY_CLOUDS_WIDTH = sizes.width / HALF_WIDTH - (sizes.PADDING + sizes.BODY_PADDING); // 8 + (16 + 16);
const BORDER_BOTTOM_WIDTH =
  sizes.height - (sizes.APP_BAR_BOTTOM + sizes.APP_BAR_HEIGHT + sizes.STATUS_BAR_HEIGHT);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    zIndex: -3,
  },
  container2: {
    backgroundColor: 'transparent',
    position: 'absolute',
    zIndex: -5,
    height: 0,
    width: 0,
    marginTop: sizes.APP_BAR_HEIGHT,
    bottom: 0,
    borderLeftColor: 'transparent',
    borderLeftWidth: sizes.width,
    borderBottomColor: '#3b374b',
    borderBottomWidth: BORDER_BOTTOM_WIDTH,
  },
  appBarStyles: {
    height: sizes.APP_BAR_HEIGHT,
    borderBottomColor: 'rgba(0,0,0,0.12)',
    borderStyle: 'solid',
    borderBottomWidth: sizes.APP_BAR_BOTTOM,
    backgroundColor: '#494361',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    position: 'relative',
  },
  appBarTitle: {
    fontSize: 21,
    paddingLeft: sizes.APP_BAR_PD_LEFT,
    color: '#fff',
    fontFamily: 'Roboto',
  },
  appBarSearch: {
    position: 'absolute',
    right: 16,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appBarMenu: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentStyle: {
    flexDirection: 'row',
    width: (SUNNY_CLOUDS_WIDTH + sizes.PADDING + sizes.BODY_PADDING) * 2,
    height: SUNNY_CLOUDS_WIDTH * 0.8,
    justifyContent: 'center',
    // backgroundColor: 'yellow',
  },
  temparatureStyle: {
    fontSize: SUNNY_CLOUDS_WIDTH * 0.5,
    color: '#ffffff',
  },
  temparatureWrapStyle: {
    width: SUNNY_CLOUDS_WIDTH,
    height: SUNNY_CLOUDS_WIDTH * 0.8,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  desc: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  descTwo: {
    flexDirection: 'row',
  },
  descStyle: {
    fontSize: 28,
    color: '#e8e8e8',
  },
  temps: { padding: 8 },
});
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
