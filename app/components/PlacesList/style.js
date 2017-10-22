import {StyleSheet} from 'react-native';
import dimensions from '../../config/dimensions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5
    },
    inlineDataContainer: {
        flexDirection: 'row',
    },
    image: {
        width: 50,
        height: 50,
        margin: 5
    },
    textContainer: {
        marginLeft: 10
    },
    placeName: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },
    importantValue: {
        fontWeight: 'bold'
    },
    statusIconsContainer: {
        flexDirection: 'row',
    },
    circleIcon: {
        fontSize: 20,
        margin: 5
    },
    lockIcon: {
        fontSize: 20,
        margin: 5
    },
    separator: {
        height: 1,
        width: "100%",
        backgroundColor: "#CED0CE"
    }
});

export default styles;