import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/fxRatesReducers';
import { ForexSelectInfo } from '../components/classes/FxRates';

const logger = createLogger();

export default function configureStore(initialState = {}) {
    return createStore<ForexSelectInfo>(
        rootReducer,
        initialState as ForexSelectInfo,
        applyMiddleware(logger)
    );
}