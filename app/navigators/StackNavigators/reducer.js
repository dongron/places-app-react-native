import {NavigationActions} from 'react-navigation';
import {AppNavigator} from './';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Favorite');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);

// const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
const DEFAULT_STATE = AppNavigator.router.getStateForAction(
    // secondAction,
    tempNavState
);

export function nav(state = DEFAULT_STATE, action) {
    let nextState;
    switch (action.type) {
        case 'LOGIN':
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.back(),
                state
            );
            break;
        case 'LOGOUT':
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({routeName: 'Login'}),
                state
            );
            break;
        case 'ROUTE_FAVORITE':
            break;
        case 'ROUTE_PLACES':
            break;
        case 'ROUTE_RESERVATIONS':
            break;
        case 'ROUTE_DETAILS':
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({routeName: 'PlaceDetails'}),   //action
                state
            );
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}

export function navParams(state = {}, action) {
    switch (action.type) {
        case 'NAV_PARAMETERS_CHANGED':
            return action.payload;
        default:
            return state;
    }
}