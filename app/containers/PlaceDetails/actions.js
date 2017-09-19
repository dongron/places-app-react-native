import store from '../../store';
import PlacesApi from '../../store/api/placesApi';

export const getPlacePhoto = (place) => {
    return (dispatch) => {
        dispatch(pendingOperation());
        // download all available photos / max first 5
        let photoReference = (place.photos && place.photos.length > 0) ? place.photos[0].photo_reference : null;

        let placesApi = new PlacesApi();
        placesApi.getPlacePhoto(photoReference).then(
            (data) => {
                dispatch(getPlacePhotoSuccess(data));
            },
            (err) => {
                console.log('photo fetch error', err);
            });
    }
};

export const getPlaceDetails = (placeId) => {
    return (dispatch) => {
        let placesApi = new PlacesApi();
        placesApi.getPlaceDetails(placeId).then(
            (data) => {
                dispatch(getPlaceDetailsSuccess(data));
            },
            (err) => {
                console.log('details fetch error', err);
            });
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