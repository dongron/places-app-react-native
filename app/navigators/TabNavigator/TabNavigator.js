import {TabNavigator} from 'react-navigation'

import FavoriteContainer from '../../containers/Favorite/index'
import PlacesContainer from '../../containers/Places/index'
import ReservationsContainer from '../../containers/Reservations/index'


const routeConfiguration = {
    TabOneNavigation: {screen: FavoriteContainer},
    TabTwoNavigation: {screen: PlacesContainer},
    TabThreeNavigation: {screen: ReservationsContainer},
};

const tabBarConfiguration = {
    //...other configs
    tabBarOptions: {
        // tint color is passed to text and icons (if enabled) on the tab bar
        activeTintColor: 'white',
        inactiveTintColor: 'blue',
        // background color is for the tab component
        activeBackgroundColor: 'blue',
        inactiveBackgroundColor: 'white',
    }
};

export const TabBar = TabNavigator(routeConfiguration, tabBarConfiguration)

export const tabBarReducer = (state, action) => {
    if (action.type === 'JUMP_TO_TAB') {
        return {...state, index: 0}
    } else {
        return TabBar.router.getStateForAction(action, state)
    }
};