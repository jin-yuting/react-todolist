import React, { Component } from 'react';
// import {Link } from 'react-router-dom';
import MenuConfig from '../config/menuConfig';
import DocumentTitle from 'react-document-title';
import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    }  
  }
  componentWillMount(){
    const menuTreeNode = this.renderMenu(MenuConfig);
    this.setState({
      menuTreeNode
    })
  }
  onCollapse = collapsed => {
    this.setState({collapsed})
  }
  //菜单渲染
  renderMenu = (data)=>{
    return data.map((item)=>{
      if(item.children){
        return (
        <SubMenu title={<span><Icon type={item.type} /><span>{item.title}</span></span>} key={item.key} >
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item key={item.key}><Icon type={item.type} />{item.title}</Menu.Item>
    })
  }
  render() {
    return (
      <DocumentTitle title='首页'>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className='home-title'>后台管理系统</div>
            <Menu theme="dark" defaultSelectedKeys={[]} mode="inline">
              {this.state.menuTreeNode}
            </Menu>
          </Sider>
          <Layout>
            <Header style={{color: '#fff'}}>Header</Header>
            <Content style={{background: '#fff',margin: '10px'}}>
              首页1
            </Content>
        </Layout>
        </Layout>
      </DocumentTitle>
    );
  }
}
export default Home;