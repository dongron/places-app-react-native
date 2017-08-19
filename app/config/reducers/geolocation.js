export function currentGeolocation(state = {}, action = {}) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.payload;
        case 'ITEMS_FETCH_DATA_ERROR':
            return action.payload;
        default:
            return state;
    }
}