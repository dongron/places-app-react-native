import {combineReducers} from 'redux';
import {places, itemsHasErrored, itemsIsLoading} from '../containers/Favorite/reducer';
import {nav} from '../navigators/StackNavigators/reducer';
import {auth} from '../config/reducers/auth';
// import navigators from '../navigators/TabNavigator/reducer';

// const places = [
//     {id: 1, name: "cafe skrzynka"},
//     {id: 2, name:"piwiarnia"}
// ];

export default combineReducers({
    // people,
    // locations,
    places,
    itemsHasErrored,
    itemsIsLoading,
    nav,
    auth
});

// export const getPlaces = ({places}) => places;
// export const getPeople = ({people}) => people;
// export const getLocations = ({locations}) => locations;