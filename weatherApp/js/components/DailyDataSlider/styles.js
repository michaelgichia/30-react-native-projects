import { StyleSheet } from 'react-native';
import { sizes, fonts, colors } from '../../CommonStyles';

export const itemWidth = (sizes.width - sizes.BODY_PADDING) / 3.5;

const styles = StyleSheet.create({
  sliderWrap: {
    width: '100%',
    marginBottom: sizes.BODY_PADDING,
  },
  tips: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32,
    paddingHorizontal: sizes.BODY_PADDING,
  },
  citiName: {
    fontSize: fonts.subHeading,
    color: colors.primaryLight,
    paddingRight: sizes.BODY_PADDING,
  },
  timeName: {
    fontSize: fonts.main,
    color: colors.primaryLight,
  },
  horizontal: {
    width: itemWidth,
    height: itemWidth,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: sizes.PADDING,
    marginBottom: sizes.PADDING,
    marginLeft: sizes.PADDING,
    marginRight: sizes.PADDING,
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
    zIndex: -20,
  },
  verticalScrollView: {
    marginTop: sizes.PADDING,
  },
  dayOfWeek: {
    color: colors.primary,
    fontSize: fonts.main,
  },
  dayTemps: {
    alignSelf: 'center',
    fontSize: 15,
    color: colors.primaryDark,
  },
  dayDesc: {
    color: 'rgb(66,61,86)',
    fontSize: fonts.main,
    alignSelf: 'center',
  },
});

export default styles;
