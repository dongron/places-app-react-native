import {StyleSheet} from 'react-native';
import dimensions from '../../config/dimensions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    image: {
        width: 50,
        height: 50
    },
    circleIcon: {
        fontSize: 30
    },
    lockIcon: {
        fontSize: 30
    },
    separator: {
        height: 1,
        width: "100%",
        backgroundColor: "#CED0CE"
    }
});

export default styles;