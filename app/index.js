import React, {Component} from 'react';
import {
    Navigator,
    StyleSheet,
    View,
    Text
} from 'react-native';
import {
    Provider,
    connect
} from 'react-redux';

import configureStore from './store/configureStore';

//import containers

import Icon from 'react-native-vector-icons/FontAwesome';
// import TabNavigator from './navigators/TabNavigator/TabNavigator';

//actions to dipatch bootstrap values
// import {setPlatform, setVersion} from './reducers/device/deviceActions';
// import {setStore} from './reducers/global/globalActions';

//initial states
// import authInitialState from './reducers/auth/authInitialState';
// import deviceInitialState from './reducers/device/deviceInitialState';
// import globalInitialState from './reducers/global/globalInitialState';
// import profileInitialState from './reducers/profile/profileInitialState';


import Favorite from './containers/Favorite';
import FavoriteStackNavigator from './navigators/StackNavigators/FavoriteStackNavigator/FavoriteStackNavigator'

const store = configureStore();

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <FavoriteStackNavigator/>
            </Provider>

            // <AppWithNavigationState />
            // <View style={styles.container}>
            //     <Text style={styles.welcome}>
            //         Welcome to React Native!
            //     </Text>
            //     <Text style={styles.instructions}>
            //         To get started, edit index.ios.js
            //     </Text>
            //     <Text style={styles.instructions}>
            //         Press Cmd+R to reload,{'\n'}
            //         Cmd+D or shake for dev menu
            //     </Text>
            // </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
