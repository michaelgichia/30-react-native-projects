import { StyleSheet } from 'react-native';
import { colors, sizes, fonts } from '../../CommonStyles';

const textInputWidth = sizes.width - (88 + sizes.BODY_PADDING * 3);

const styles = StyleSheet.create({
  textInputStyles: {
    width: textInputWidth,
    paddingHorizontal: 16,
    fontSize: fonts.main,
    color: colors.clouds,
  },
  wrapper: {
    height: 56,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: sizes.BODY_PADDING,
  },
  backBtn: {
    height: 40,
    width: 40,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearBtn: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: sizes.BODY_PADDING,
    marginLeft: sizes.PADDING,
  },
});

export default styles;
