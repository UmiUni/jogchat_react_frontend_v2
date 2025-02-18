/* @flow */

import 'index.css';
import { ConnectedRouter, connectRouter } from 'connected-react-router/immutable';
import { history, store } from 'store';
import { AppContainer } from 'react-hot-loader';
import type { ModuleHot } from 'flow-typed';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { renderRoutes } from 'react-router-config';
import rootReducer from './reducers';
import routes from './routes';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          { renderRoutes(routes) }
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
