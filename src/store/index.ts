import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/fxRatesReducers';
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { ForexSelectProps } from '../components/classes/FxRates';
import { createBrowserHistory } from 'history';

const history = createHistory();
const logger = createLogger();
/*
{
    predicate: () => process.env.NODE_ENV === 'development',
  }*/

export default function configureStore(initialState = {}) {
    //console.log('Inside store->configureStore', initialState);
    const history  = createBrowserHistory();

    return createStore<ForexSelectProps>(
        rootReducer,
        initialState as ForexSelectProps,
        applyMiddleware(thunk, routerMiddleware(history), logger)
    );
}