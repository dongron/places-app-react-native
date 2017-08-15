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

    listData = [{
        name: "Cafe S",
        street: "Sobieskiego",
        streetNr: "1",
        localNr: "110",
        city: "Częstochowa",
        geo: {
            latitude: 66,
            longitude: 66
        },
        ownerEmail: "w@w.w",
        schedule: {
            "1-o": new Date('2015-01-01'),
            "1-c": new Date('2020-01-01'),
            "2-o": new Date('2015-01-01'),
            "2-c": new Date('2020-01-01'),
            "3-o": new Date('2015-01-01'),
            "3-c": new Date('2020-01-01'),
            "4-o": new Date('2015-01-01'),
            "4-c": new Date('2020-01-01'),
            "5-o": new Date('2015-01-01'),
            "5-c": new Date('2020-01-01'),
            "6-o": new Date('2015-01-01'),
            "6-c": new Date('2020-01-01'),
            "0-o": new Date('2015-01-01'),
            "0-c": new Date('2020-01-01'),
        },
        clientsVelocity: {
            current: 900,
            max: 1000,
            maxGroup: 25
        }
    },
    {
        name: "C 2",
        street: "Sokiego",
        streetNr: "99",
        localNr: "9999",
        city: "Wawa",
        geo: {
            latitude: 22,
            longitude: 22
        },
        ownerEmail: "e@e.w",
        schedule: {
            "1-o": new Date('2015-01-01'),
            "1-c": new Date('2015-06-06'),
            "2-o": new Date('2015-01-01'),
            "2-c": new Date('2015-06-06'),
            "3-o": new Date('2015-01-01'),
            "3-c": new Date('2015-06-06'),
            "4-o": new Date('2015-01-01'),
            "4-c": new Date('2015-06-06'),
            "5-o": new Date('2015-01-01'),
            "5-c": new Date('2015-06-06'),
            "6-o": new Date('2015-01-01'),
            "6-c": new Date('2015-06-06'),
            "0-o": new Date('2015-01-01'),
            "0-c": new Date('2015-06-06'),
        },
        clientsVelocity: {
            current: 0,
            max: 30,
            maxGroup: 8
        },
    }];

    currentLocation;

    onItemClick(item) {
        console.log('item in parent clicked', item);
    }


    constructor(props) {
        super(props);
        // this.listData = props;
    }

    componentDidMount() {
        // this.getCurrentPosition();
        this.getNearbyPlacesFromApi();
    }

    getCurrentPosition() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                let initialPosition = JSON.stringify(position);
                this.currentLocation = initialPosition;
            },
            (error) => alert(error.message),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
    }

    getNearbyPlacesFromApi() {
        const {getNearbyPlaces} = this.props;
        getNearbyPlaces();
    }


    onElementPress(item) {
        console.log(item);
    }

    render() {
        return(
            <PlacesList listData={this.props.places} position={this.currentLocation} onItemClick={this.onElementPress()} />
        );
    }
}