import { StyleSheet } from 'react-native';
import { colors, sizes, fonts } from '../../CommonStyles';

const styles = StyleSheet.create({
  searchSn: {
    backgroundColor: '#16141f',
    height: sizes.height,
    width: sizes.width,
  },
  tOStyles: {
    paddingVertical: sizes.BODY_PADDING,
    borderStyle: 'solid',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#000',
    paddingLeft: sizes.APP_BAR_PD_LEFT + sizes.BODY_PADDING,
  },
  tOStylesText: {
    color: colors.light,
    fontSize: fonts.main,
  },
  autoCompStyles: {
    width: '100%',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#16141f',
  },
});

export default styles;
