import React, { PureComponent } from 'react';
import { Layout, Menu } from 'antd';
import { withRouter } from 'react-router-dom';

class Sidebar extends PureComponent {
  render() {
    return (
      <Layout.Sider theme="light" breakpoint="lg" collapsedWidth={0}>
        <Menu
          mode="inline"
          // selectedKeys={[this.props.location.pathname.split('/')[1] || 'home']}
        >
          <Menu.Item key="home">微信扫码进群</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Layout.Sider>
    );
  }
}

export default withRouter(Sidebar);
