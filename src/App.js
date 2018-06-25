// @flow

import React, { Component } from 'react';
import Header from 'components/Header';
import { renderRoutes } from 'react-router-config';
import Sidebar from 'components/Sidebar';

type Props = {|
  route: any,
|};

class App extends Component<Props> {
  render (): React$Node {
    return (
      <div>
        <Header />
        <div className="main-view">
          <Sidebar />
          { renderRoutes(this.props.route.routes) }
        </div>
      </div>
    );
  }
}

export default App;
