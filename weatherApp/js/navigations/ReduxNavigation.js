import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigations/AppNavigations';

const homeAction = AppNavigator.router.getActionForPathAndParams('Home');
const homeState = AppNavigator.router.getStateForAction(homeAction);
const searchAction = AppNavigator.router.getActionForPathAndParams('Search');
const initialState = AppNavigator.router.getStateForAction(searchAction, homeState);

function navReducer(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case 'Home':
      nextState = AppnavReducerigator.router.getStateForAction(NavigationActions.back(), state);
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

export default navReducer;
