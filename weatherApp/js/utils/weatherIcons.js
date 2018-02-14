import React from 'react';
import {
  Fewclouds,
  Clearsky,
  Scatteredclouds,
  Brokenclouds,
  Showerrain,
  Rain,
  Thunderstorm,
  Snow,
} from '../components/WeatherCondition';

const weatherIcons = (iconNum, isSmall) => {
  switch (iconNum) {
    case '01':
      return <Clearsky isSmall={isSmall} />;
      break;

    case '02':
      return <Fewclouds isSmall={isSmall} />;
      break;

    case '03':
      return <Scatteredclouds isSmall={isSmall} />;
      break;

    case '04':
      return <Brokenclouds isSmall={isSmall} />;
      break;

    case '09':
      return <Showerrain isSmall={isSmall} />;
      break;

    case '10':
      return <Rain isSmall={isSmall} />;
      break;

    case '11':
      return <Thunderstorm isSmall={isSmall} />;
      break;

    case '13':
      return <Snow isSmall={isSmall} />;
      break;

    default:
      return <Clearsky isSmall={isSmall} />;
      break;
  }
};

export default weatherIcons;
