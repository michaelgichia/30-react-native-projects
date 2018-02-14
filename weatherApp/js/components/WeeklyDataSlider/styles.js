import { StyleSheet } from 'react-native';
import { colors, fonts, sizes } from '../../CommonStyles';

// To get two and one partially visible item

export const itemWidth = (sizes.width - sizes.BODY_PADDING) / 2.5;
// maintain 3:4 ratio.
const itemHeight = itemWidth / 3 * 4;

const styles = StyleSheet.create({
  sliderWrap: {
    width: '100%',
    marginTop: sizes.BODY_PADDING * 3,
  },
  tips: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: sizes.BODY_PADDING,
  },
  citiName: {
    fontSize: fonts.subHeading,
    color: colors.primaryLight,
    paddingRight: sizes.BODY_PADDING,
  },
  horizontal: {
    width: itemWidth,
    height: itemHeight,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: sizes.PADDING,
    margin: sizes.PADDING,
    justifyContent: 'space-between',
    overflow: 'hidden',
    position: 'relative',
    zIndex: -20,
    paddingVertical: sizes.BODY_PADDING,
  },
  verticalScrollView: {
    marginTop: sizes.PADDING,
  },
  dayOfWeek: {
    color: colors.primaryDark,
    fontSize: fonts.main,
    paddingLeft: sizes.PADDING,
  },
  dayTemps: {
    alignSelf: 'center',
    fontSize: 20,
    color: colors.primaryDark,
  },
  dayDesc: {
    color: 'rgb(66,61,86)',
    fontSize: fonts.subHeading,
    alignSelf: 'center',
  },
});

export default styles;
