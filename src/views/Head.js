import React, { Component } from 'react';
import avater from '../style/images/b1.jfif';
import { Menu, Layout } from 'antd';
const { Header } = Layout;
const { SubMenu } = Menu;

class Head extends Component{
  render(){
    return (
      <Header className="custom-theme header" style={{textAlign: 'right'}}>
        <Menu mode="horizontal" theme="dark" style={{height: '64px', lineHeight: '64px'}}>
          <SubMenu 
            title={
              <span>
                <img style={{width: '50px', borderRadius: '50%'}} src={avater} alt="头像" />
              </span>
            }
          >
            <Menu.Item key="setting:1">个人信息</Menu.Item>
            <Menu.Item key="setting:2">退出登录</Menu.Item>
          </SubMenu>
        </Menu>
      </Header>
    );
  }
}
export default Head;