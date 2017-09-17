import {connect} from 'react-redux';

import * as actions from './actions';
import {getCurrentGeolocation} from "../../config/actions/geolocation";
import {routeToDetailsScreen} from '../../navigators/StackNavigators/actions';
import {itemsHasErrored, items, itemsIsLoading} from './reducer';
import Favorite from './ui';
import store from '../../store';


//cloneWithRows no longer needed for flatlist
//import reducers:
const mapStateToProps = (state, props) => ({
    places: state.places,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
});

//import actions:
const mapDispatchToProps = {
    ...actions,
    getCurrentGeolocation,
    routeToDetailsScreen
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);