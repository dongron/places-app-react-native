import store from '../../store';
import PlacesApi from '../../store/api/placesApi';

export const getPlaceDetails = (placeId) => {
    return (dispatch) => {
        dispatch(pendingOperation());

        let placesApi = new PlacesApi();
        placesApi.getPlacePhoto(placeId).then((data) => {
            dispatch(getPlaceDetailsSuccess(data));
        });

        // placesApi.getPlaceDetails(placeId).then(
        //         (data) => {
        //             dispatch(getPlaceDetailsSuccess(data))
        //         },
        //         (err) => console.log('err:', err)
        //     );
    }
};

export const getPlaceDetailsSuccess = (placeDetails) => {
    return {
        type: 'PLACE_DETAILS_DATA',
        payload: placeDetails,
        receivedAt: Date.now()
    }
};

export const getPlacePhotoSuccess = (placePhoto) => {
    return {
        type: 'PLACE_DETAILS_PHOTO',
        payload: placePhoto,
        receivedAt: Date.now()
    }
};

export const pendingOperation = () => {
    return {
        type: 'PENDING_OPERATION'
    }
};