import React, { Component } from 'react';
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
        title: 'Favorites',
    };

    places = this.props.places || [];
    currentLocation;


    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getCurrentPosition();
        this.getNearbyPlacesFromApi();
    }

    getNearbyPlacesFromApi() {
        const {getNearbyPlaces} = this.props;
        getNearbyPlaces();
    }

    getCurrentPosition() {
        const {getCurrentGeolocation} = this.props;
        console.log('props', this.props);  
        getCurrentGeolocation();
    }


    render() {
        return(
            <PlacesList listData={this.props.places} position={this.currentLocation} onItemPress={this.props.routeToDetailsScreen} />
        );
    }
}