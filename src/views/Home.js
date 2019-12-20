import React, { Component } from 'react';
// import {Link } from 'react-router-dom';
import MenuConfig from '../config/menuConfig';
import Head from './Head';
import DocumentTitle from 'react-document-title';
import { Layout, Menu, Icon } from 'antd';

const { Sider, Content } = Layout;
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
            <Head />
            <Content style={{background: '#fff',margin: '10px'}}>
              单纯的redux如何使用
              <div>1.引入 import screateStore from 'redux'</div>

              <div>2.创建一个reducer函数，用于执行状态更新</div>
              <div>reducer(state,action) 返回一个新对象</div>
              
    {/* <div>function(state,action){
        return {
          name: '大山',
          age:'28' 
        }
      }</div> */}
      <div>3.创建store let store = createStore(reducer)</div>

      <div>4.当需要读取store中的state时，通过getState来调用</div>
      <div>let store = store.getState()</div>
      <div>5. 用dispatcher来修改state</div>
      {/* <div>store.dispatch({type:'123'})</div> */}
            </Content>
        </Layout>
        </Layout>
      </DocumentTitle>
    );
  }
}
export default Home;