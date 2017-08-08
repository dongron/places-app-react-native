import PlacesApi from '../../store/api/placesApi';


export const getNearbyPlaces = (lat, lng) => {
    return (dispatch) => {
        dispatch(pendingOperation());

        let placesApi = new PlacesApi(lat, lng);
        placesApi.getNearbyRestaurants()
            .then((data) => {
            console.log('DATA from API in actions', data);
                dispatch(getNerbyPlacesSuccess(data))
            })
            .catch((err) => console.log('err:', err))
    }
};

export const getNerbyPlacesSuccess = (places) => {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        payload: places
    }
};

export const pendingOperation = () =>{
    return{
        type: 'PENDING_OPERATION'
    }
};



// export const logIn = (loginData) => {
//     return {
//         type: 'LOG_IN',
//         payload: loginData
//     }
// };
//
// export const getData = () => {
//     return {
//         type: 'GET_FAVORITES'
//     }
// };