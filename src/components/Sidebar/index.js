/* @flow */

import './index.css';
import { Menu, MenuItem } from '@blueprintjs/core';
import React, { PureComponent } from 'react';
import { push } from 'connected-react-router';
import { store } from 'store';
import { withRouter } from 'react-router-dom';

type Props = {||};

class Sidebar extends PureComponent<Props> {
  dispatchNavigation = () => {
    store.dispatch(push('test'));
  }

  render (): React$Node {
    return (
      <Menu className="sidebar">
        <MenuItem icon="chat" text="微信扫码进群" onClick={this.dispatchNavigation} />
        <MenuItem icon="feed" text="美国华人周报" />
        <MenuItem icon="flag" text="hard-code没问题吗" />
        <MenuItem icon="people" text="我不管了" />
        <MenuItem icon="map" text="先这样吧" />
      </Menu>
    );
  }
}

export default withRouter(Sidebar);
