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







// import React from 'react'
//
// // Navigation
// import { addNavigationHelpers } from 'react-navigation'
// import { NavigatorTabOne } from '../navigationConfiguration'
//
// // Redux
// import { connect } from 'react-redux'
//
// // Icon
// import Icon from 'react-native-vector-icons/FontAwesome'
//
//
// const mapStateToProps = (state) => {
//     return {
//         navigationState: state.tabOne
//     }
// }
//
// class TabOneNavigation extends React.Component {
//     static navigationOptions = {
//         tabBarLabel: 'Tab One',
//         tabBarIcon: ({ tintColor }) => <Icon size={ 20 } name={ 'cogs' } color={ tintColor }/>
//     }
//
//     render(){
//         const { navigationState, dispatch } = this.props
//         return (
//             <NavigatorTabOne
//                 navigation={
//                     addNavigationHelpers({
//                         dispatch: dispatch,
//                         state: navigationState
//                     })
//                 }
//             />
//         )
//     }
// }
// export default connect(mapStateToProps)(TabOneNavigation)