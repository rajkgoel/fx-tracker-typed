import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import configureStore  from './store';
import ForexSelectContainer from "./components/Forexes/Forexes";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ForexSelectContainer />
    </Provider>,
    document.getElementById("root")
);
