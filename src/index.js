import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ListNhanVien from './components/ListNhanVien';
import * as serviceWorker from "./serviceWorker";
import rootSaga from "./sagas/rootSaga";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import allReducer from "./reducers";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

let store = createStore(allReducer, compose(applyMiddleware(sagaMiddleware)));
// run the saga
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <h3>Redux</h3>
    <App />
    <hr/>
    <h3>Redux saga</h3>
    <ListNhanVien />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();