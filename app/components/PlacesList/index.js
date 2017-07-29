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
import style from './style';

export default class PlacesList extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <FlatList
                data={this.props.listData}
                renderItem={
                    ({item}) => <TouchableHighlight onPress={() => this.onElementPress(item)}>
                        <View>
                            <Image source={images.place}/>
                            <Text>{item.name}</Text>
                        </View>
                    </TouchableHighlight>
                }
            />
        );
    }

}