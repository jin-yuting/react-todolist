import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import MenuConfig from './config/menuConfig';
import Head from './pages/Head';
import { switchMenu } from './redux/action/index'
// import Child1 from './components/Child1';
// import Child2 from './components/Child2';
import DocumentTitle from 'react-document-title';
import { Layout, Menu, Icon } from 'antd';

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      currentKey: '/home' // 菜单高亮
    }  
  }
  componentWillMount(){
    const menuTreeNode = this.renderMenu(MenuConfig);
    let currentKey= window.location.hash.replace(/#|\?.*$/g,'')
    this.setState({
      menuTreeNode,
      currentKey
    })
  }
  handleCurrentKey = ({item,key})=>{
    const { dispatch } = this.props;
    dispatch(switchMenu(item.props.children[0]))
    this.setState({
      currentKey: key
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
          <SubMenu title={<span><Icon  type={item.type} /><span>{item.title}</span></span>} key={item.key} >
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return <Menu.Item key={item.key}>
        {item.title}
          <NavLink to={item.key}> {item.type && <Icon type={item.type} />}<span>{item.title}</span></NavLink>
        </Menu.Item>
    });
  }
  render() {
    return (
      <DocumentTitle title='首页'>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className='home-title'>后台管理系统</div>
            <Menu theme="dark" onClick={this.handleCurrentKey} selectedKeys={[this.state.currentKey]} mode="inline">
              {this.state.menuTreeNode}
            </Menu>
          </Sider>
          <Layout>
            <Head />
            <Content style={{background: '#fff',margin: '10px'}}>
              {this.props.children}
              {/* 姓名：{this.props.reducer1.name}
              年龄：{this.props.reducer2.age}
              <Child1 />
              <Child2 /> */}
            </Content>
        </Layout>
        </Layout>
      </DocumentTitle>
    );
  }
}
export default connect(
  // (state,props)=>{ return Object.assign({},props,state)},
  // {}
)(App);