import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, TextInput, TouchableOpacity, Animated, Easing } from 'react-native';
import { colors } from '../../CommonStyles';
import styles from './styles';
import { handleSearchInput } from './actions';

const { textInputStyles, wrapper, backBtn, clearBtn } = styles;

class SearchInput extends Component {
  static propTypes = {
    value: PropTypes.string,
    handleSearchInput: PropTypes.func.isRequired,
    onPress: PropTypes.func.isRequired,
  };

  state = {
    isFocused: true,
  };

  animation = new Animated.Value(0);
  _toValue = false;

  componentWillUnmount() {
    try {
      this.refs.inputRef.blur();
    } catch (error) {}
  }

  componentDidMount() {
    this._handleAnimation();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.closeKeyboard === false) {
      this.refs.inputRef.blur();
    }
  }

  _handleAnimation = () => {
    const toValue = this._toValue ? 0 : 1;
    Animated.sequence([
      Animated.delay(200),
      Animated.timing(this.animation, {
        toValue,
        duration: 1500,
      }).start(),
    ]);

    this._toValue = !this._toValue;
  };

  _handleClearSearch = () => {
    this.refs.inputRef.clear();
    this.props.handleSearchInput('');
  };

  render() {
    const { isFocused } = this.state;
    const { city } = this.props;
    const backgroundColor = {
      backgroundColor: this.animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['#16141f', colors.primary],
      }),
    };

    return (
      <Animated.View style={[wrapper, backgroundColor]}>
        <TouchableOpacity onPress={this.props.onPress} style={backBtn}>
          <Ionicons
            name="md-arrow-back"
            style={{ fontWeight: '700' }}
            size={24}
            color={colors.primaryLight}
          />
        </TouchableOpacity>
        <TextInput
          autoFocus
          ref="inputRef"
          style={textInputStyles}
          onChangeText={city => this.props.handleSearchInput(city)}
          value={city}
          placeholderTextColor={colors.light}
          selectionColor={colors.light}
          placeholder="Search"
          returnKeyType="search"
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity onPress={this._handleClearSearch} style={clearBtn}>
          <Ionicons
            name="md-close"
            style={{ fontWeight: '700' }}
            size={24}
            color={colors.primaryLight}
          />
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

const mapDispatchStateToProps = dispatch => ({
  handleSearchInput: city => dispatch(handleSearchInput(city)),
});

const mapStateToProps = ({ search }) => ({
  city: search.city,
  closeKeyboard: search.closeKeyboard,
});

export default connect(mapStateToProps, mapDispatchStateToProps)(SearchInput);
