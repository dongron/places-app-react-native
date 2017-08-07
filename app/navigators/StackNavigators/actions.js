import store from '../../store/index';

export const searchLocationSuccess = (coordinates) => {
    return {
        type: 'SEARCH_LOCATION',
        payload: coordinates
    }
};