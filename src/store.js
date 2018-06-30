/* @flow */

import 'index.css';
import { applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { persistReducer, persistStore } from 'redux-persist';
import { apiMiddleware } from 'redux-api-middleware';
import { createBrowserHistory } from 'history';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import Immutable from 'immutable';
import immutableTransform from 'redux-persist-transform-immutable';
import rootReducer from './reducers';
import storage from 'redux-persist/lib/storage';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  transforms: [ immutableTransform() ],
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, connectRouter(history)(rootReducer));

const logger = createLogger({
  stateTransformer: (state: any): Object => {
    const newState = {};
    for (var i of Object.keys(state)) {
      // $FlowFixMe
      if (Immutable.Iterable.isIterable(state[i])) {
        newState[i] = state[i].toJS();
      } else {
        newState[i] = state[i];
      }
    }
    return newState;
  }
});

export const store = createStore(
  (persistedReducer: any),
  initialState,
  composeEnhancer(
    applyMiddleware(
      sagaMiddleware,
      routerMiddleware(history),
      apiMiddleware,
      logger,
    ),
  ),
);

export const persistor = persistStore(store);
