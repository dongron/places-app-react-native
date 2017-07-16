import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from "redux-logger";

import rootReducer from './rootReducer';

export default function configureStore(initialState) {
    console.log('creating store');
    const logger = createLogger();
    const enhancer = compose(
        applyMiddleware(thunk, logger)
    );

    return createStore(rootReducer, initialState, enhancer);
}