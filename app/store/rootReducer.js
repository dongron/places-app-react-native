import {combineReducers} from 'redux';

// import people from './people';
// import locations from './locations';
import { items, itemsHasErrored, itemsIsLoading } from '../containers/Favorite/reducer';
// import navigators from '../navigators/TabNavigator/reducer';

// const places = [
//     {id: 1, name: "cafe skrzynka"},
//     {id: 2, name:"piwiarnia"}
// ];

export default combineReducers({
    // people,
    // locations,
    items, itemsHasErrored, itemsIsLoading
});

// export const getPlaces = ({places}) => places;
// export const getPeople = ({people}) => people;
// export const getLocations = ({locations}) => locations;