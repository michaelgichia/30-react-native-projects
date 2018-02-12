import { combineReducers } from 'redux';
import navReducer from '../navigations/ReduxNavigation';
import searchReducer from '../containers/SearchInput/reducer';

const rootReducer = combineReducers({
  search: searchReducer,
  nav: navReducer,
});

export default rootReducer;
