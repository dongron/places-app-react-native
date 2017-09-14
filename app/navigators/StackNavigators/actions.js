import store from '../../store/index';

export const searchLocationSuccess = (coordinates) => {
    return {
        type: 'SEARCH_LOCATION',
        payload: coordinates
    }
};

export const routeToDetailsScreen = (place = {}) => {
    return (dispatch) => {
        dispatch(saveParams(place));
        dispatch(routeToScreen('DETAILS'));
    }
};

export const saveParams = (navParams) => {
    return {
        type: 'NAV_PARAMETERS_CHANGED',
        payload: navParams
    }
};


const routeToScreen = (screenName) => {
    let screeenName = screenName.toUpperCase();
    return {
        type: 'ROUTE_' + screenName,
        receivedAt: Date.now()
    }
};
