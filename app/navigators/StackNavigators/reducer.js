import { NavigationActions } from 'react-navigation';
import { AppNavigator } from './';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Favorite');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);

// const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
const DEFAULT_STATE = AppNavigator.router.getStateForAction(
    // secondAction,
    tempNavState
);

export function nav(state = DEFAULT_STATE, action) {
    console.log('---state nav', state);
    let nextState;
    switch (action.type) {
        case 'Login':
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.back(),
                state
            );
            break;
        case 'Logout':
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Login' }),
                state
            );
            break;
        case 'Favorite':
            break;
        case 'Places':
            break;
        case 'Reservations':
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}



// const AppReducer = combineReducers({
//     nav,
//     auth,
// });

// export default AppReducer;