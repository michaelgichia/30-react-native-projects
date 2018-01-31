/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

class FlatListItem extends PureComponent {
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

class ItemSeparatorComponent extends PureComponent {
  render() {
    return <View style={sepator} />;
  }
}

export default class App extends PureComponent {
  render() {
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
            <Text style={timerStylesOneText}>00:00:00</Text>
          </View>
          <View style={[timerStylesTwo, textPadding]}>
            <Text style={[timerStylesTwoText]}>00:00:00</Text>
          </View>
        </LinearGradient>

        <View style={timerListStyles}>
          <View style={btnWrapper}>
            <TouchableOpacity activeOpacity={0.5} style={[btn, btnOne]} onPress={() => {}}>
              <View>
                <Text style={btnTextOne}>STOP</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} style={[btn, btnTwo]} onPress={() => {}}>
              <View>
                <Text style={btnTextTwo}>START</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <View style={flatListWrapper}>
              <FlatList
                data={[{ key: '00:00:30' }, { key: '00:00:40' }, { key: '00:00:50' }]}
                renderItem={({ item }) => <FlatListItem>{item.key}</FlatListItem>}
                ItemSeparatorComponent={ItemSeparatorComponent}
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
    fontSize: 28,
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
    color: '#fff',
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
