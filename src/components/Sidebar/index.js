import React, { PureComponent } from 'react';
import { Menu, MenuItem } from '@blueprintjs/core';
import { withRouter } from 'react-router-dom';
import './index.css';

class Sidebar extends PureComponent {
  render() {
    return (
      <Menu className="sidebar">
        <MenuItem icon="chat" text="微信扫码进群" />
        <MenuItem icon="feed" text="美国华人周报" />
        <MenuItem icon="flag" text="hard-code没问题吗" />
        <MenuItem icon="people" text="我不管了" />
        <MenuItem icon="map" text="先这样吧" />
      </Menu>
    );
  }
}

export default withRouter(Sidebar);
