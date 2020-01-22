import React, { Component } from 'react';
import avater from '../assets/images/b1.jfif';
import { Menu, Layout, Breadcrumb } from 'antd';
import { connect } from 'react-redux';
const { Header } = Layout;
const { SubMenu } = Menu;

class Head extends Component {
  render() {
    return (
      <div>
        <Header className="custom-theme header" style={{ textAlign: 'right' }}>
        <Breadcrumb style={{ margin: '16px 0',float:'left' }}>
          <Breadcrumb.Item>{this.props.menuName||'菜单导航'}</Breadcrumb.Item>
        </Breadcrumb>
          <Menu mode="horizontal" theme="dark" style={{ height: '64px', lineHeight: '64px',width: '100px',float:'right' }}>
            <SubMenu
              title={
                <span>
                  <img style={{ width: '50px', borderRadius: '50%' }} src={avater} alt="头像" />
                </span>
              }
            >
              <Menu.Item key="setting:1">个人信息</Menu.Item>
              <Menu.Item key="setting:2">退出登录</Menu.Item>
            </SubMenu>
          </Menu>
        </Header>
      </div>
    );
  }
}
const mapStateToProps = state=> {
  return {
    // menuName: state.menuName
  }
}
export default connect(mapStateToProps)(Head);