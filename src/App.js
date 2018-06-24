// @flow

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from 'components/Header';
import Home from 'components/Home';
import Sidebar from 'components/Sidebar';

type Props = {||};

class App extends Component<Props> {
  render (): React$Node {
    return (
      <div>
        <Header />
        <div className="main-view">
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
