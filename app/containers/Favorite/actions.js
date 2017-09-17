import PlacesApi from '../../store/api/placesApi';


export const getNearbyPlaces = (lat, lng) => {
    return (dispatch) => {
        dispatch(pendingOperation());

        let placesApi = new PlacesApi();
        placesApi.getNearbyRestaurants(lat, lng)
            .then(
                (data) => {
                    dispatch(getNerbyPlacesSuccess(data))
                },
                (err) => console.log('err:', err)
            )
    }
};

export const getNerbyPlacesSuccess = (places) => {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        payload: places,
        receivedAt: Date.now()
    }
};

export const pendingOperation = () => {
    return {
        type: 'PENDING_OPERATION'
    }
};

