export const getCurrentGeolocation = (enableHighAccuracyValue = true) => {
    return (dispatch) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                let initialPosition = JSON.stringify(position);
                dispatch(getCurrentGeolocationSuccess(initialPosition, enableHighAccuracyValue));
            },
            (error) => {
                dispatch(getCurrentGeolocationError(error, enableHighAccuracyValue));
            },
            // {enableHighAccuracy: enableHighAccuracyValue, timeout: 20000, maximumAge: 1000}
        );
    }
};

export const getCurrentGeolocationSuccess = (geo, enableHighAccuracyValue) => {
    let geoJSON = JSON.parse(geo);
    geoJSON.highAccuracyMode = enableHighAccuracyValue;
    return {
        type: 'SET_GEOLOCATION_SUCCESS',
        payload: geoJSON,
        receivedAt: Date.now()
    }
};

export const getCurrentGeolocationError = (error, enableHighAccuracyValue) => {
    alert(error.message, enableHighAccuracyValue);
    return {
        type: 'SET_GEOLOCATION_ERROR',
        payload: error,
        receivedAt: Date.now(),
        highAccuracy: enableHighAccuracyValue
    }
};