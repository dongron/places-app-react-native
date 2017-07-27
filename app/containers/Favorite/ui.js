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


export default class Favorite extends Component {

    listData = [{
        name: "Cafe S",
        street: "Sobieskiego",
        streetNr: "1",
        localNr: "110",
        city: "Częstochowa",
        geo: "22",
        ownerEmail: "w@w.w",
        schedule: {
            "1-o": new Date(),
            "1-c": new Date(),
            "2-o": new Date()
        }
    },
    {
        name: "C 2",
        street: "Sokiego",
        streetNr: "99",
        localNr: "9999",
        city: "Wawa",
        geo: "2245454",
        ownerEmail: "e@e.w"
    }];



    constructor(props) {
        super(props);
        // this.listData = props;
    }

    static navigationOptions = {
        title: 'Favorites',
    };

    onElementPress(item) {
        console.log(item);
    }

    render() {
        return(
            <View>
                <FlatList
                    data={this.listData}
                    renderItem={
                        ({item}) => <TouchableHighlight onPress={() => this.onElementPress(item)}>
                            <View>
                                <Image source={images.place}/>
                                <Text>{item.name}</Text>
                            </View>
                        </TouchableHighlight>
                    }
                    />
            </View>
        );
    }
}