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
        image = placePhoto ? {uri: placePhoto} : images.restaurant;
        let openStatus = placeDetailsData && placeDetailsData.data && placeDetailsData.data.opening_hours.open_now ? 'Open' : 'Close';
        let address = placeDetailsData && placeDetailsData.data.formatted_address;

        return (
            <View>
                <Image style={styles.mainImage}
                       resizeMode={'cover'}
                       source={image}
                />
                <Text
                    style={styles.openStatus}>{openStatus}</Text>
                <Text style={styles.distance}>xx km</Text>
                {/*list of hours for days of week*/}
                <Text style={styles.openingHours}></Text>
                <Text style={styles.address}>{address}</Text>
                <Text style={styles.description}></Text>
                <View>
                    <Text>{this.props.placeDetailsData && this.props.placeDetailsData.data.international_phone_number}</Text>
                    <Text>{this.props.placeDetailsData && this.props.placeDetailsData.data.website}</Text>
                    {/*view for phone & email & website*/}
                </View>
            </View>
        );
    }
}
