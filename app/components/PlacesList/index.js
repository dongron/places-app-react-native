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
        if (item.opening_hours && item.opening_hours.open_now)
            return 'unlock';
        else
            return 'lock';
    }

    getSeatsAvailabilityColor(item) {
        // let proporcion = item.clientsVelocity.current / item.clientsVelocity.max;
        // if (proporcion >= 0.9)
        //     return 'red';
        // else if (proporcion > 0.5)
        //     return 'yellow';
        // else
        //     return 'green';
    }

    // onItemPress(item) {
    //     this.props.onItemPress(item);
    // }

    keyExtractor (item, index) {
        return item.id;
    }


    render() {
        return (
            <FlatList
                data={this.props.listData}
                keyExtractor={this.keyExtractor}
                renderItem={
                    ({item}) => <TouchableHighlight onPress={() => this.props.onItemPress(item)}>
                        <View style={style.container}>
                            <View style={style.inlineDataContainer}>
                                <View>
                                    <Image style={style.image}
                                           source={{uri: item.icon}}/>
                                    <View style={style.statusIconsContainer}>
                                        <Icon name="circle"
                                              style={style.circleIcon}
                                              color={this.getSeatsAvailabilityColor(item)}/>
                                        <Icon name={this.getOpenStatusIcon(item)}
                                              style={style.lockIcon}/>
                                        {/*<Icon name="lock" size={30} color="red"/>*/}
                                    </View>
                                </View>
                                <View style={style.textContainer}>
                                    <Text style={style.placeName}>{item.name}</Text>
                                    {/*<Text>Seats: {item.clientsVelocity.current}/{item.clientsVelocity.max}</Text>*/}
                                    <View style={style.inlineDataContainer}>
                                        <Text>Distance: </Text>
                                        <Text style={style.importantValue}>{item.geometry.location.lat} {item.geometry.location.lng} {/*{this.props.currentLocation}*/}</Text>
                                    </View>
                                    <View style={style.inlineDataContainer}>
                                        <Text>Rating: </Text>
                                        <Text style={style.importantValue}>{item.rating || 'none'}</Text>
                                        <Text>/ 5</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={style.separator}/>
                        </View>
                    </TouchableHighlight>
                }
            />
        );
    }

}