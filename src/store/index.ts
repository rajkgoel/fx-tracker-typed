import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import ratesReducer from '../reducers/fxRatesReducers';
import { ForexSelectInfo } from '../classes/FxRates';

const logger = createLogger();

export default function configureStore(initialState = {}) {
    return createStore<ForexSelectInfo>(
        ratesReducer,
        initialState as ForexSelectInfo,
        applyMiddleware(logger)
    );
}