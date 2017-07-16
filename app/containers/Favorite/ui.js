import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

import images from '../../config/images';
import colors from '../../config/colors';


export default class Favorite extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Favorites',
    };

    render() {
        return(
            <View>
                <Text> Testowy tekst
                </Text>
            </View>
        );
    }
}