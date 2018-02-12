import React, { PureComponent } from 'react';
import PropType from 'prop-types';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, View } from 'react-native';
import { colors, fonts, sizes } from '../../CommonStyles';
/*
 * Wrapper
*/
class Wrapper extends PureComponent {
  static = {
    children: PropType.node.isRequired,
    isSmall: PropType.bool.isRequired,
  };
  render() {
    const { isSmall, children } = this.props;
    return <View style={isSmall ? sunnyCloudSmall : sunnyClouds}>{children}</View>;
  }
}

/*
 * Few clouds
*/
export class Fewclouds extends PureComponent {
  render() {
    const { isSmall } = this.props;
    return (
      <Wrapper isSmall={isSmall}>
        <FontAwesomeIcon
          style={[cloud, { left: isSmall ? 25 : 30 }, commonHeight, isSmall ? shadow : {}]}
          name="cloud"
          size={isSmall ? SUNNY_CLOUDS_WIDTH * 0.35 : SUNNY_CLOUDS_WIDTH * 0.71}
          color={colors.clouds}
        />
        <Ionicons
          style={[commonZindex, commonStyleA]}
          name="ios-sunny"
          size={isSmall ? SUNNY_CLOUDS_WIDTH * 0.35 : SUNNY_CLOUDS_WIDTH * 0.6}
          color={colors.sun}
        />
      </Wrapper>
    );
  }
}

/*
 * Few clouds
*/
export class Clearsky extends PureComponent {
  render() {
    const { isSmall } = this.props;
    return (
      <Wrapper isSmall={isSmall}>
        <Ionicons
          style={[fewClouds, { right: isSmall ? 10 : 30 }]}
          name="ios-sunny"
          size={isSmall ? SUNNY_CLOUDS_WIDTH * 0.45 : SUNNY_CLOUDS_WIDTH * 0.9}
          color={colors.sun}
        />
      </Wrapper>
    );
  }
}

/*
 * scattered clouds
*/
export class Scatteredclouds extends PureComponent {
  render() {
    const { isSmall } = this.props;
    return (
      <Wrapper isSmall={isSmall}>
        <Ionicons
          style={[scatteredClouds, isSmall ? shadow : {}, { right: isSmall ? 10 : 0 }]}
          name="ios-cloud"
          size={isSmall ? SUNNY_CLOUDS_WIDTH * 0.45 : SUNNY_CLOUDS_WIDTH}
          color="#ffffff"
        />
      </Wrapper>
    );
  }
}

/*
 * broken clouds
*/
export class Brokenclouds extends PureComponent {
  render() {
    const { isSmall } = this.props;
    return (
      <Wrapper isSmall={isSmall}>
        <Ionicons
          style={[commonHeight, isSmall ? shadow : {}]}
          name="ios-cloud"
          size={isSmall ? SUNNY_CLOUDS_WIDTH * 0.5 : SUNNY_CLOUDS_WIDTH}
          color={colors.clouds}
        />
        <Ionicons
          style={[brokenclouds2, isSmall ? {} : commonHeight, isSmall ? { top: 0 } : {}]}
          name="ios-cloudy"
          size={isSmall ? SUNNY_CLOUDS_WIDTH * 0.35 : SUNNY_CLOUDS_WIDTH * 0.9}
          color="#000"
        />
      </Wrapper>
    );
  }
}

/*
 * shower rain
*/
export class Showerrain extends PureComponent {
  render() {
    const { isSmall } = this.props;
    return (
      <Wrapper isSmall={isSmall}>
        <Ionicons
          style={[
            showerrain,
            { left: isSmall ? 10 : 30 },
            isSmall ? { right: 10 } : commonHeight,
            isSmall ? shadow : {},
          ]}
          name="ios-rainy"
          size={isSmall ? SUNNY_CLOUDS_WIDTH * 0.45 : SUNNY_CLOUDS_WIDTH * 0.8}
          color={colors.clouds}
        />
        <Ionicons
          style={[commonZindex, isSmall ? {} : commonHeight, isSmall ? { top: 0 } : commonStyleC]}
          name="ios-cloudy"
          size={isSmall ? SUNNY_CLOUDS_WIDTH * 0.35 : SUNNY_CLOUDS_WIDTH * 0.7}
          color="#000"
        />
      </Wrapper>
    );
  }
}

/*
 * rain
*/
export class Rain extends PureComponent {
  render() {
    const { isSmall } = this.props;
    return (
      <Wrapper isSmall={isSmall}>
        <Ionicons
          style={[showerrain, { left: isSmall ? 0 : 30 }, commonHeight, isSmall ? shadow : {}]}
          name="ios-rainy"
          size={isSmall ? SUNNY_CLOUDS_WIDTH * 0.45 : SUNNY_CLOUDS_WIDTH * 0.8}
          color={colors.clouds}
        />
        <Ionicons
          style={[commonZindex, commonStyleC, commonHeight]}
          name="ios-sunny"
          size={isSmall ? SUNNY_CLOUDS_WIDTH * 0.35 : SUNNY_CLOUDS_WIDTH * 0.6}
          color={colors.sun}
        />
      </Wrapper>
    );
  }
}

/*
 * Thunderstorm
*/
export class Thunderstorm extends PureComponent {
  render() {
    const { isSmall } = this.props;
    return (
      <Wrapper isSmall={isSmall}>
        <Ionicons
          style={[commonZindex, commonStyleC]}
          name="ios-cloud"
          size={isSmall ? SUNNY_CLOUDS_WIDTH * 0.35 : SUNNY_CLOUDS_WIDTH * 0.9}
          color="#000000"
        />
        <Ionicons
          style={[commonZindex, commonStyleA, isSmall ? shadow : {}]}
          name="ios-thunderstorm"
          size={isSmall ? SUNNY_CLOUDS_WIDTH * 0.45 : SUNNY_CLOUDS_WIDTH * 0.9}
          color="#ffffff"
        />
      </Wrapper>
    );
  }
}

/*
 * Snow
*/
export class Snow extends PureComponent {
  render() {
    const { isSmall } = this.props;
    return (
      <Wrapper isSmall={isSmall}>
        <MaterialCommunityIcons
          style={[commonZindex, isSmall ? { left: 10 } : commonStyleC, isSmall ? shadow : {}]}
          name="weather-snowy"
          size={isSmall ? SUNNY_CLOUDS_WIDTH * 0.45 : SUNNY_CLOUDS_WIDTH * 0.8}
          color="#ffffff"
        />
      </Wrapper>
    );
  }
}

const HALF_WIDTH = 2;
// Example 8 + (16 + 16);
const SUNNY_CLOUDS_WIDTH = sizes.width / HALF_WIDTH - (sizes.PADDING + sizes.BODY_PADDING);

const styles = StyleSheet.create({
  sunnyClouds: {
    width: SUNNY_CLOUDS_WIDTH,
    height: SUNNY_CLOUDS_WIDTH,
    position: 'relative',
  },
  sunnyCloudSmall: {
    width: SUNNY_CLOUDS_WIDTH * 0.5,
    height: SUNNY_CLOUDS_WIDTH * 0.45,
    position: 'relative',
    alignSelf: 'center',
  },
  shadow: {
    textShadowColor: 'rgba(0,0,0,.5)',
    shadowOpacity: 1,
    textShadowRadius: 15,
    textShadowOffset: { width: 2, height: 1 },
  },
  commonStyleA: {
    top: 0,
    left: 0,
    zIndex: -1,
    position: 'absolute',
  },
  commonStyleB: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  commonStyleC: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  commonHeight: {
    height: SUNNY_CLOUDS_WIDTH * 0.8,
  },
  commonZindex: {
    zIndex: -1,
  },
  fewClouds: {
    top: 0,
    zIndex: -1,
    position: 'absolute',
  },
  cloud: {
    position: 'absolute',
    top: 10,
  },
  scatteredClouds: {
    height: SUNNY_CLOUDS_WIDTH * 0.8,
    position: 'absolute',
    top: -30,
  },
  brokenclouds2: {
    position: 'absolute',
    top: 10,
    right: 0,
    zIndex: -1,
  },
  showerrain: {
    position: 'absolute',
    top: 0,
  },
});
const {
  sunnyClouds,
  cloud,
  commonZindex,
  fewClouds,
  scatteredClouds,
  brokenclouds2,
  showerrain,
  commonStyleA,
  commonStyleB,
  commonStyleC,
  commonHeight,
  sunnyCloudSmall,
  shadow,
} = styles;

export default Fewclouds;
