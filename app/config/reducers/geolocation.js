export function currentGeolocation(state = {}, action = {}) {
    switch (action.type) {
        case 'SET_GEOLOCATION_SUCCESS':
            return action.payload;
        case 'SET_GEOLOCATION_ERROR':
            return action.payload;
        default:
            return state;
    }
}