import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Dimensions,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

class FlatListItem extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children } = this.props;
    return (
      <View style={listItemWrap}>
        <Text style={listItemName}>Hello world</Text>
        <Text style={listItem}>{children}</Text>
      </View>
    );
  }
}

class ItemSeparatorComponent extends Component {
  render() {
    return <View style={sepator} />;
  }
}

export default class App extends Component {
  state = {
    timer: 0,
    laps: [],
  };
  id = 1;

  _counter = () => this.setState(state => ({ timer: state.timer + 1 }));

  _handleStartTimer = () => {
    this.startTimer = setInterval(this._counter, 1000);
  };

  _handleClearTimer = () => {
    this.id = this.id + 1;
    this.setState(state => {
      laps: state.laps.length > 0
        ? state.laps.push({
            id: this.id,
            value: state.timer - state.laps.reduce((a, b) => (a > b ? a : b)).value,
          })
        : state.laps.push({ id: this.id, value: state.timer });
    });
    clearInterval(this.startTimer);
  };

  componentWillUnmount() {
    clearInterval(this.startTimer);
  }

  _keyExtractor = (item, index) => item.id;

  prettifySeconds = seconds => {
    let currentTime;
    let hours = 0;
    let minutes = 0;
    let currentSeconds = 0;

    if (seconds >= 3600) {
      hours = Math.floor(seconds / 3600);
    }

    if (seconds > 59) {
      currentTime = seconds - 3600 * hours;
      let currentMinutes = Math.floor(currentTime / 60);
      minutes = currentMinutes;
      currentSeconds = currentTime - currentMinutes * 60;
    } else {
      currentSeconds = seconds;
    }

    return {
      hours: `${('00' + hours).slice(-2)}`,
      minutes: `${('00' + minutes).slice(-2)}`,
      seconds: `${('00' + currentSeconds).slice(-2)}`,
    };
  };

  render() {
    const { timer, laps } = this.state;
    const { hours, minutes, seconds } = this.prettifySeconds(timer);
    const initialData = [...laps];
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <LinearGradient
          colors={['#e18df8', '#a997fb']}
          style={linearGradient}
          start={{ x: 0.2, y: 1 }}
          end={{ x: 1, y: 0.5 }}
        >
          <View style={[timerStylesOne, textPadding]}>
            <Text style={timerStylesOneText}>01:10:00</Text>
          </View>
          <View style={[timerStylesTwo, textPadding]}>
            <Text style={[timerStylesTwoText]}>{`${hours}:${minutes}:${seconds}`}</Text>
          </View>
        </LinearGradient>

        <View style={timerListStyles}>
          <View style={btnWrapper}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={[btn, btnTwo]}
              onPress={this._handleStartTimer}
            >
              <View>
                <Text style={btnTextTwo}>START</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              style={[btn, btnOne]}
              onPress={this._handleClearTimer}
            >
              <View>
                <Text style={btnTextOne}>STOP</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <View style={flatListWrapper}>
              <FlatList
                data={laps}
                renderItem={({ item }) => <FlatListItem key={item.id}>{item.value}</FlatListItem>}
                ItemSeparatorComponent={ItemSeparatorComponent}
                extraData={this.state}
                keyExtractor={this._keyExtractor}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const height = 32;
const padding = 8;
const { width } = Dimensions.get('window');
const btnWidth = width / 2 - 32;
const btnHeght = height + padding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  watchHead: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  watchText: {
    fontSize: 29,
    paddingVertical: 8,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    color: '#a997fb',
  },
  timerListStyles: {
    flex: 5,
    marginTop: 64,
  },
  linearGradient: {
    borderRadius: 5,
    flex: 2,
    elevation: 6,
    margin: 16,
    marginTop: 50,
  },
  textPadding: {
    paddingHorizontal: 32,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  timerStylesOne: {
    flex: 2,
    alignItems: 'flex-end',
  },
  timerStylesTwo: {
    flex: 5,
    alignItems: 'flex-start',
  },
  timerStylesOneText: {
    fontSize: 24,
    color: '#ffffff',
  },
  timerStylesTwoText: {
    fontSize: 64,
    color: '#fff',
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    height: btnHeght,
    width: btnWidth,
    borderRadius: 2,
    borderStyle: 'solid',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnOne: {
    borderColor: '#a997f8',
    backgroundColor: '#ffffffff',
  },
  btnTwo: {
    borderColor: '#a997f8',
    backgroundColor: '#a997f8',
  },
  btnTextOne: {
    color: '#a997f8',
    fontSize: 15,
    fontWeight: 'bold',
  },
  btnTextTwo: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  listItemWrap: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItem: {
    fontSize: 18,
    color: '#a997f8',
    fontWeight: 'bold',
  },
  listItemName: {
    fontSize: 18,
    color: '#a997f8',
  },
  sepator: {
    backgroundColor: '#d8cdf8',
    height: StyleSheet.hairlineWidth,
  },
  flatListWrapper: {
    marginTop: 32,
    paddingHorizontal: 16,
    marginBottom: 32,
  },
});
const {
  watchHead,
  timerListStyles,
  watchText,
  linearGradient,
  timerStylesOne,
  timerStylesTwo,
  textPadding,
  timerStylesTwoText,
  timerStylesOneText,
  btnWrapper,
  btn,
  btnOne,
  btnTwo,
  btnTextOne,
  btnTextTwo,
  listItem,
  sepator,
  flatListWrapper,
  listItemWrap,
  listItemName,
} = styles;
