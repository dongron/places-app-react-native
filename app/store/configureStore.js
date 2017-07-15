import {createStore, applyMiddleware, compose} from 'redux';
import  thunk from 'redux-thunk';
import rootReducer from './rootReducer';

export default function createReduxStore(initialState) {
    console.log('creating store');
    const enhancer = compose(
        applyMiddleware(thunk)
    );

    return createStore(rootReducer, initialState, enhancer);
}