import {AsyncStorage} from 'react-native';

// const userId = "USER_ID";
const UserDataKey = "SELECTED_LOCATION";


export const setUserData = (user) => {
    console.log('Async Storage setting user');
    AsyncStorage.setItem(UserDataKey, JSON.stringify(user));
    console.log('user set');
};

export const getUserData = () => {
    AsyncStorage.getItem(UserDataKey).then((userData) => {
        return JSON.stringify(userData);
    });
};

