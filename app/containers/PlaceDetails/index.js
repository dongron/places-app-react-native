import {connect} from 'react-redux';

import * as actions from './actions';
import {itemsHasErrored, items, itemsIsLoading} from './reducer';
import PlaceDetails from './ui';
import store from '../../store';


// TODO: cloneWithRows
const mapStateToProps = (state, props) => ({
});

const mapDispatchToProps = {
    ...actions
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetails);