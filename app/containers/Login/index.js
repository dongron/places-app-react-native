import {connect} from 'react-redux';

console.log('--before index imports');
import * as actions from './actions';
import {itemsHasErrored, items, itemsIsLoading} from './reducer';
import Favorite from './ui';
import store from '../../store';

console.log('--after index imports');
const mapStateToProps = (state, props) => ({
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
});

const mapDispatchToProps = {
    ...actions
};

console.log('--before connect   ');
export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
