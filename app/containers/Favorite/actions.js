export const logIn = (loginData) => {
    return {
        type: 'LOG_IN',
        payload: loginData
    }
};

export const getData = () => {
    return {
        type: 'GET_FAVORITES'
    }
};