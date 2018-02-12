import {
  ON_INPUT_CHANGE,
  CLEAR_STATE_CITIES,
  FETCH_WEATHER_DATA,
  FETCH_WEATHER_DATA_SUCCESS,
  FETCH_WEATHER_SUCCESS,
} from './constants';
import data from './data';

const initialAuthState = {
  city: '',
  cities: [],
  closeKeyboard: null,
  isFetching: false,
  weather: [],
};

function searchReducer(state = initialAuthState, actions) {
  switch (actions.type) {
    case ON_INPUT_CHANGE:
      let cities;
      if (actions.city.length > 0) {
        cities = data.filter(x => x.name.includes(actions.city.trim()));
      } else {
        cities = [];
      }
      return {
        ...state,
        city: actions.city,
        cities,
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
      return {
        ...state,
        weather: actions.data,
        isFetching: false,
      };

    default:
      return state;
  }
}

export default searchReducer;
