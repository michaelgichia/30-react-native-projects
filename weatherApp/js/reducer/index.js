import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import searchReducer from '../containers/SearchInput/reducer';
import nav from './ReduxNavigation';

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['nav'],
};

const rootReducer = combineReducers({
  search: searchReducer,
  nav,
});

export default persistReducer(rootPersistConfig, rootReducer);
