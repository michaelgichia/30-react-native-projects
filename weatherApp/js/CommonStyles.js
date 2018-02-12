import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const CommonStyles = {
  colors: {
    primary: '#484262', // #457B9D rgb(161, 213, 217)
    secondary: '#ff9b06',
    primaryLight: '#e8e8e8',
    primaryDark: '#3b374b',
    textColor: '#F1FAEE',
    secondaryLight: '#A8DADC',
    secondaryDark: '#fa6602',
    primaryContrast: '#74bbc2',
    secondaryContrast: '#fa6602',
    text: '#ffffff',
    text2: '#1b1c1e',
    transparent: 'rgba(0,0,0,0)',
    clouds: '#fff',
    sun: '#ffdc7a',
    light: '#c2bbe1',
  },
  fonts: {
    caption: 13,
    small: 14,
    main: 15,
    subHeading: 17,
    appBar: 20,
    title: 21,
    headLine: 24,
    display1: 34,
    display2: 45,
    display3: 56,
  },
  sizes: {
    BODY_PADDING: 16,
    APP_BAR_HEIGHT: 56,
    APP_BAR_BOTTOM: 4,
    PADDING: 8,
    STATUS_BAR_HEIGHT: 24,
    APP_BAR_PD_LEFT: 72,
    ICON_SIZE: 24,
    width,
    height,
  },
  border: {
    radius: 2,
  },
};

export const { colors, fonts, border, sizes } = CommonStyles;

export default CommonStyles;
