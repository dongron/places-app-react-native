import {connect} from 'react-redux';

import * as actions from './actions';
import {itemsHasErrored, items, itemsIsLoading} from './reducer';
import PlaceDetails from './ui';
import store from '../../store';


const mapStateToProps = (state, props) => ({
    place: state.navParams,
    placeDetails: state.placeDetailsData,
    placePhoto: state.placeDetailsData.photo
});

const mapDispatchToProps = {
    ...actions
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetails);