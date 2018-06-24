import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import store from '../store';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <div className="main-view">
              <Sidebar />
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
