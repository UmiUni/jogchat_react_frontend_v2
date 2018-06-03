import React, { PureComponent } from 'react';
import { Layout, Menu } from 'antd';
import './index.css';

class Header extends PureComponent {
  render() {
    return (
      <Layout.Header>
        <Menu theme="dark" mode="horizontal" className="header-menu">
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Layout.Header>
    );
  }
}

export default Header;
