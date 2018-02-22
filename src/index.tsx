import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import ForexSelectContainer from "./components/Forexes/Forexes";
import { FxRate, Rate } from "./components/classes/FxRates";
import { createBrowserHistory } from 'history';
import configureStore  from './store';

const history  = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ForexSelectContainer />
    </Provider>,
    document.getElementById("root")
);
