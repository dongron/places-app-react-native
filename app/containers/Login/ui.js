import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

import images from '../../config/images';
import colors from '../../config/colors';


export default class Login extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Login',
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