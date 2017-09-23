import React, {Component} from 'react';
import {
    Text,
    View,
    TextInput,
    FlatList,
    TouchableHighlight,
    Image,
    Button
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

    renderWebsite(website) {
        if (website)
            return <Button
                title={website}/>
        else
            return;
    }

    render() {
        let {placeDetailsData, placePhoto} = this.props;
        image = placePhoto ? {uri: placePhoto} : images.restaurant;
        let openStatus = null;
        if (placeDetailsData && placeDetailsData.opening_hours && placeDetailsData.opening_hours.open_now)
            openStatus = 'Open';
        else if (placeDetailsData && placeDetailsData.opening_hours && !placeDetailsData.opening_hours.open_now)
            openStatus = 'Close';
        let address = placeDetailsData && placeDetailsData.formatted_address;
        let phoneNumber = (placeDetailsData && placeDetailsData.international_phone_number) || '';
        let website = (placeDetailsData && placeDetailsData.website) || '';
        // console.warn(placePhoto, placeDetailsData);
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
                    <Button
                        title={'Call ' + phoneNumber}/>
                    {this.renderWebsite(website)}
                    {/*view for phone & email & website*/}
                </View>
            </View>
        );
    }
}
