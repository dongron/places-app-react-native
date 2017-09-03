import store from '../../store/index';

export const searchLocationSuccess = (coordinates) => {
    return {
        type: 'SEARCH_LOCATION',
        payload: coordinates
    }
};

export const routeToDetailsScreen = (place = {}) => {
    return {
        type: 'ROUTE_DETAILS',
        payload: place,
        receivedAt: Date.now()
    }
};