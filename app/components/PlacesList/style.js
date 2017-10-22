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
        flex: 1,
        marginLeft: 10,
    },
    placeName: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    importantValue: {
        fontWeight: 'bold'
    },
    headerContainer: {
        flexDirection: 'row',
        flex: 1
    },
    circleIcon: {
        fontSize: 20,
        marginLeft: 5,
        marginRight: 5
    },
    iconsContainer: {
        justifyContent:'flex-end'
    },
    lockIcon: {
        fontSize: 20,
        margin: 5,
        justifyContent: 'flex-end'
    },
    separator: {
        marginTop: 10,
        height: 1,
        width: "100%",
        backgroundColor: "#CED0CE"
    }
});

export default styles;