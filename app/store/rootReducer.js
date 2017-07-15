import {combineReducers} from 'redux';

// import people from './people';
// import locations from './locations';
import places from '../containers/Login/reducer';

// const places = [
//     {id: 1, name: "cafe skrzynka"},
//     {id: 2, name:"piwiarnia"}
// ];

export default combineReducers({
    // people,
    // locations,
    places
});

export const getPlaces = ({places}) => places;
// export const getPeople = ({people}) => people;
// export const getLocations = ({locations}) => locations;