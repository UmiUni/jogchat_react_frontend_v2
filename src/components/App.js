import React, { Component } from 'react';
import { Layout } from 'antd';
import { Provider } from 'react-redux';
import store from '../store';
import Header from './Header';
import Sidebar from './Sidebar';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout>
          <Header />
          <Layout hasSider>
            <Sidebar />
            <Layout className="app-content">
              <Layout.Content>woo</Layout.Content>
            </Layout>
          </Layout>
        </Layout>
      </Provider>
    );
  }
}

export default App;
