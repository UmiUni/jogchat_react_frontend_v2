import React, { PureComponent } from 'react';
import { Layout, Menu } from 'antd';

class Sidebar extends PureComponent {
  render() {
    return (
      <Layout.Sider theme="light" breakpoint="lg" collapsedWidth={0}>
        <Menu mode="inline">
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Layout.Sider>
    );
  }
}

export default Sidebar;
