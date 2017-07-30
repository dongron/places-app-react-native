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
import Icon from 'react-native-vector-icons/FontAwesome';

import images from '../../config/images';
import style from './style';

export default class PlacesList extends Component {

    constructor(props) {
        super(props);
    }

    getOpenStatusIcon(item) {
        return 'unlock';
    }

    getSeatsAvailabilityColor(item) {
        let proporcion = item.clientsVelocity.current / item.clientsVelocity.max;
        if (proporcion >= 0.9)
            return 'red';
        else if (proporcion > 0.5)
            return 'yellow';
        else
            return 'green';
    }


    render() {
        return (
            <FlatList
                data={this.props.listData}
                renderItem={
                    ({item}) => <TouchableHighlight onPress={() => this.onElementPress(item)}>
                        <View>
                            <Image source={images.place}/>
                            <Text>{item.name}</Text>
                            <Text>Seats: {item.clientsVelocity.current}/{item.clientsVelocity.max}</Text>
                            <Text>{item.geo.latitude} {item.geo.longitude} {this.props.currentLocation}</Text>
                            <Icon name="circle" size={30} color={this.getSeatsAvailabilityColor(item)}></Icon>
                            <Icon name={this.getOpenStatusIcon(this)} size={30}></Icon>
                            {/*<Icon name="lock" size={30} color="red"/>*/}
                            <View
                                style={{
                                    height: 1,
                                    width: "100%",
                                    backgroundColor: "#CED0CE"
                                }}
                            />
                        </View>
                    </TouchableHighlight>
                }
            />
        );
    }

}