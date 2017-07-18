import { StackNavigator } from 'react-navigation'

// Screens
import Favorite from '../../../containers/Favorite';

const routeConfiguration = {
TabOneScreenOne: { screen: Favorite },
// TabOneScreenTwo: { screen: TabOneScreenTwo },
};

// going to disable the header for now
const stackNavigatorConfiguration = {
    headerMode: 'none',
    initialRouteName: 'TabOneScreenOne'
};

export const NavigatorTabOne = StackNavigator(routeConfiguration,stackNavigatorConfiguration);
