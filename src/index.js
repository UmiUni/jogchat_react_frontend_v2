/* @flow */

import 'index.css';
import { applyMiddleware, compose, createStore } from 'redux';
import { ConnectedRouter, connectRouter, routerMiddleware } from 'connected-react-router/immutable';
import App from './App';
import { AppContainer } from 'react-hot-loader';
import { createBrowserHistory } from 'history';
import { Map } from 'immutable';
import type { ModuleHot } from 'flow-typed';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

const initialState = Map();

export const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
    ),
  ),
);

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    (document.getElementById('root'): any)
  );
};

render();

declare var module: {
  hot?: ModuleHot
};

if (module.hot) {
  const moduleHot: ModuleHot = module.hot;

  moduleHot.accept('./App', () => {
    render();
  });

  moduleHot.accept('./reducers', () => {
    store.replaceReducer(connectRouter(history)(rootReducer));
  });
}

registerServiceWorker();
