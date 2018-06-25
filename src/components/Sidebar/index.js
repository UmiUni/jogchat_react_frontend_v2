/* @flow */

import './index.css';
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@blueprintjs/core';
import { push } from 'connected-react-router';
import { store } from 'store';

type Props = {||};

class Sidebar extends PureComponent<Props> {
  dispatchNavigation = () => {
    store.dispatch(push('test'));
  };

  render (): React$Node {
    return (
      <Menu className="sidebar">
        <Link className="pt-menu-item pt-icon-flag" to="/facebook">
          加Facebook地区群
        </Link>
        <Link className="pt-menu-item pt-icon-chat" to="/">
          微信扫码进群
        </Link>
        <Link className="pt-menu-item pt-icon-feed" to="/">
          美国华人周报
        </Link>
        <Link className="pt-menu-item pt-icon-code" to="/">
          硅谷面试刷题
        </Link>
        <Link className="pt-menu-item pt-icon-people" to="/">
          股市Trading技术
        </Link>
        <Link className="pt-menu-item pt-icon-map" to="/partners">
          合作伙伴
        </Link>
      </Menu>
    );
  }
}

export default Sidebar;
