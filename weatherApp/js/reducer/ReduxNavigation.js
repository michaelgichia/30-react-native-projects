import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigations/AppNavigations';

const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
const firstState = AppNavigator.router.getStateForAction(firstAction);

const secondAction = AppNavigator.router.getActionForPathAndParams('Search');
const secondState = AppNavigator.router.getStateForAction(secondAction);

const initialNavState = AppNavigator.router.getStateForAction(firstAction, firstState);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'Home':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Home' }),
        state,
      );
      break;
    case 'Search':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Search' }),
        state,
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
}

export default nav;
