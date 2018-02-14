import { StyleSheet } from 'react-native';
import { colors, fonts, sizes } from '../../CommonStyles';

const HALF_WIDTH = 2;
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
    fontSize: fonts.display3 - 12,
    color: '#ffffff',
  },
  temparatureWrapStyle: {
    width: SUNNY_CLOUDS_WIDTH,
    height: SUNNY_CLOUDS_WIDTH * 0.8,
    justifyContent: 'center',
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
  },
  temps: { padding: 8 },
});

export default styles;
