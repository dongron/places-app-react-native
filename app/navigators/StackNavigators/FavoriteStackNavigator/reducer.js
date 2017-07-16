const DEFAULT_STATE = {};

// login.reducer.js can export the auth_state，after combine with the single state.
export default (state = DEFAULT_STATE, {type, payload} = {}) => {
    switch (type) {
        case 'LOG_IN':
            return {...state, lastModified: Date.now()};
        case 'LOG_OUT':
            return {...state, lastModified: Date.now()};
        // case 'SEARCH_LOCATION':
        //     return {searchedLocation: payload};
        // case 'DISMISS_LOCATION_CHANGES':
        //     return {searchedLocation: {}};
        default:
            return state;
    }
}