import {
  ON_INPUT_CHANGE,
  CLEAR_STATE_CITIES,
  FETCH_WEATHER_DATA,
  FETCH_WEATHER_SUCCESS,
} from './constants';

const appId = 'f488e855e86d5d17b55cad86fcc8c2f3';
const rootUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?';
const numOfDays = '7';

export const handleSearchInput = city => ({
  type: ON_INPUT_CHANGE,
  city,
});

export const clearCities = () => ({
  type: CLEAR_STATE_CITIES,
});

export const closeKeyboard = () => ({
  type: FETCH_WEATHER_DATA,
});

export const fetchWeather = cityId => (dispatch) => {
  fetch(`${rootUrl}id=${cityId}&cnt=${numOfDays}&appid=${appId}`)
    .then(res => res.json())
    .then((json) => {
      dispatch({
        type: FETCH_WEATHER_SUCCESS,
        data: json.list,
      });
    })
    .catch((err) => {}); // ToDo: handle error
};

export default handleSearchInput;
