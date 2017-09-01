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


    render() {
        return (
            <View>
                <Image style={styles.mainImage}
                       resizeMode={'cover'}
                       source={images.restaurant}
                       // source={{uri: item.icon}}
                />
                <Text style={styles.openStatus}>Open</Text>
                <Text style={styles.distance}>30km</Text>
                {/*list of hours for days of week*/}
                <Text style={styles.openingHours}></Text>
                <Text style={styles.address}>ul. Xyz </Text>
                <Text style={styles.city}>ul. Xyz </Text>
                <Text style={styles.description}></Text>
                <View>
                    {/*view for phone & email*/}
                </View>
            </View>
        );
    }
}
