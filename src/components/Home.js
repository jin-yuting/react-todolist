import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
class Home extends Component {
  state = {
    collapsed: false,
  };
  onCollapse = collapsed => {
    this.setState({collapsed})
  }
  render() {
    return (
      <DocumentTitle title='首页'>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className='home-title'>后台管理系统</div>
            <Menu theme="dark" defaultSelectedKeys={[]} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
          </Sider>
          <Layout>
            <Header style={{color: '#fff'}}>Header</Header>
            <Content style={{background: '#fff',margin: '10px'}}>
              首页
            </Content>
        </Layout>
        </Layout>
      </DocumentTitle>
    );
  }
}
export default Home;