import {combineReducers} from 'redux';
import {places, itemsHasErrored, itemsIsLoading} from '../containers/Favorite/reducer';
import {placeDetailsData} from '../containers/PlaceDetails/reducer';
import {nav, navParams} from '../navigators/StackNavigators/reducer';
import {auth} from '../config/reducers/auth';
import {currentGeolocation} from "../config/reducers/geolocation";
// import navigators from '../navigators/TabNavigator/reducer';

export default combineReducers({
    places,
    itemsHasErrored,
    itemsIsLoading,
    nav,
    auth,
    navParams,
    currentGeolocation,
    placeDetailsData
});

// export const getPlaces = ({places}) => places;
// export const getPeople = ({people}) => people;
// export const getLocations = ({locations}) => locations;