import axios from 'axios';
import {
  ON_INPUT_CHANGE,
  CLEAR_STATE_CITIES,
  FETCH_WEATHER_DATA,
  FETCH_WEATHER_SUCCESS,
  UPDATE_CITY,
} from './constants';

const appId = 'f488e855e86d5d17b55cad86fcc8c2f3';
const rootUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?';
const numOfDays = '7';

export const handleSearchInput = city => ({
  type: ON_INPUT_CHANGE,
  city,
});

export const updateCity = cityObject => ({
  type: UPDATE_CITY,
  cityObject,
});

export const clearCities = () => ({
  type: CLEAR_STATE_CITIES,
});

export const closeKeyboard = () => ({
  type: FETCH_WEATHER_DATA,
});

export const fetchWeather = cityId => (dispatch) => {
  axios
    .get(`${rootUrl}id=${cityId}&cnt=${numOfDays}&appid=${appId}`)
    .then((res) => {
      // console.warn({res})
      dispatch({ type: ON_INPUT_CHANGE, city: '' });
      dispatch({ type: FETCH_WEATHER_SUCCESS, data: res.data.list });
      dispatch({ type: 'Home' });
    })
    .catch((error) => {
      // console.warn(error);
    });
};
export default handleSearchInput;
