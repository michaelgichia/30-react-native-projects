import {
  ON_INPUT_CHANGE,
  CLEAR_STATE_CITIES,
  FETCH_WEATHER_DATA,
  FETCH_WEATHER_DATA_SUCCESS,
  FETCH_WEATHER_SUCCESS,
  UPDATE_CITY,
} from './constants';
import data from './data';

const initialAuthState = {
  city: '',
  cities: [],
  isFetching: false,
  cityObject: { name: '', id: null },
  weather: [],
  today: {
    temp: {
      day: 0,
    },
    pressure: 0,
    humidity: 0,
    weather: [
      {
        description: '',
        icon: '',
      },
    ],
    speed: 0,
    deg: 0,
    clouds: 0,
  },
};

const sortCities = cities =>
  cities.sort((a, b) => {
    if (a.name.toUpperCase() < b.name.toUpperCase()) {
      return -1;
    }
    if (a.name.toUpperCase() > b.name.toUpperCase()) {
      return 1;
    }
    return 0;
  });

function searchReducer(state = initialAuthState, action) {
  switch (action.type) {
    case ON_INPUT_CHANGE:
      let cities;
      if (action.city.length > 0) {
        const filteredCities = data.filter(x => x.name.includes(action.city.trim()));
        cities = sortCities(filteredCities).slice(0, 5);
      } else {
        cities = [];
      }
      return {
        ...state,
        city: action.city,
        cities,
        closeKeyboard: null,
      };

    case CLEAR_STATE_CITIES:
      return {
        ...state,
        cities: [],
      };

    case FETCH_WEATHER_DATA:
      return {
        ...state,
        closeKeyboard: false,
        isFetching: true,
      };

    case FETCH_WEATHER_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };

    case FETCH_WEATHER_SUCCESS:
      const today = action.data.reduce((a, c) => (a.dt < c.dt ? a : c));
      return {
        ...state,
        weather: action.data,
        isFetching: false,
        today,
      };

    case UPDATE_CITY:
      return {
        ...state,
        cityObject: action.cityObject,
      };

    default:
      return state;
  }
}

export default searchReducer;
