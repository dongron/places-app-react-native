export const getCurrentGeolocation = () => {
    return (dispatch) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                let initialPosition = JSON.stringify(position);
                dispatch(getCurrentGeolocation(initialPosition));
            },
            (error) => {
                dispatch(getCurrentGeolocationError(error));
            },
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
    }
};

export const getCurrentGeolocationSuccess = (geo) => {
    return {
        type: 'SET_GEOLOCATION_SUCCESS',
        payload: geo,
        receivedAt: Date.now()
    }
};

export const getCurrentGeolocationError = (err) => {
    alert(error.message);
    return {
        type: 'SET_GEOLOCATION_ERROR',
        payload: err,
        receivedAt: Date.now()
    }
};