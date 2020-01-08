import React, { Component } from 'react';
import { Layout } from 'antd';
const { Header, Content } = Layout;

export default class Common extends Component {
  render(){
    return(
      <div>
        <Layout>
          <Header style={{color:'white'}}>
            后台管理系统
          </Header>
          <Content>
            {this.props.children}
          </Content>
        </Layout>
      </div>
    )
  }
}
