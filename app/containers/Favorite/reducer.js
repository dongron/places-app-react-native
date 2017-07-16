const DEFAULT_STATE = {};

// login.reducer.js can export the auth_state，after combine with the single state.
// export default (state = DEFAULT_STATE, {type, payload} = {}) => {
//     switch (type) {
//         case 'LOG_IN':
//             return {...state, lastModified: Date.now()};
//         case 'LOG_OUT':
//             return {...state, lastModified: Date.now()};
//         // case 'SEARCH_LOCATION':
//         //     return {searchedLocation: payload};
//         // case 'DISMISS_LOCATION_CHANGES':
//         //     return {searchedLocation: {}};
//         default:
//             return state;
//     }
// }

export function itemsHasErrored(state = DEFAULT_STATE, action = {}) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}
export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items;
        default:
            return state;
    }
}