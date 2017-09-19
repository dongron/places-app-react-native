import React, {Component} from 'react';
import {
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

import {styles} from './styles';


export default class Favorite extends Component {

    static navigationOptions = {
        title: 'Details',
    };


    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.getPlacePhoto();
        this.getPlaceDetils();
    }

    getPlacePhoto() {
        const {getPlacePhoto} = this.props;
        let {place} = this.props;
        getPlacePhoto(place);
    }

    getPlaceDetils() {
        const {getPlaceDetails} = this.props;
        let {place} = this.props;
        getPlaceDetails(place.place_id);
    }

    render() {
        let {placeDetailsData, placePhoto} = this.props;
        image = placePhoto? {uri: placePhoto} : images.restaurant;
        return (
            <View>
                <Image style={styles.mainImage}
                       resizeMode={'cover'}
                       source={image}
                />
                <Text style={styles.openStatus}>Open</Text>
                <Text style={styles.distance}>30km</Text>
                {/*list of hours for days of week*/}
                <Text style={styles.openingHours}></Text>
                <Text style={styles.address}>{this.props.place.vicinity}</Text>
                <Text style={styles.description}></Text>
                <View>
                    {/*view for phone & email & website*/}
                </View>
            </View>
        );
    }
}
