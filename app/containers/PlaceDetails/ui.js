import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    FlatList,
    TouchableHighlight,
    Image
} from 'react-native';

import images from '../../config/images';
import colors from '../../config/colors';
import PlacesList from "../../components/PlacesList";


export default class Favorite extends Component {

    static navigationOptions = {
        title: 'Details',
    };


    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View>

            </View>
        );
    }
}