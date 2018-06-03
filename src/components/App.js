import React, { Component } from 'react';
import { Layout } from 'antd';
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
          <Layout>
            <Header />
            <Layout hasSider>
              <Sidebar />
              <Layout className="app-content">
                <Layout.Content>
                  <Switch>
                    <Route exact path="/" component={Home} />
                  </Switch>
                </Layout.Content>
              </Layout>
            </Layout>
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
