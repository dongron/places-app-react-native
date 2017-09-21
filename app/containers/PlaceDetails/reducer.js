const DEFAULT_STATE = {
    photo: null,
    data: null
};

export const placeDetailsData = (state = DEFAULT_STATE, {type, payload} = {}) => {
    switch (type) {
        case 'PLACE_DETAILS_PHOTO':
            return {...state, photo: payload, lastModified: Date.now()};
        case 'PLACE_DETAILS_DATA':
            return {...state, data: payload, lastModified: Date.now()};
        default:
            return state;
    }
};