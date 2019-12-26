import React, { Component } from 'react';
import { Card, Button, Icon, Radio } from 'antd';
import './ui.less';
class Buttons extends Component {
  state = {
    loading: true,
    size: 'default'
  };
  enterLoading = () => {
    this.setState({ loading: false});
  };
  handleSizeChange  = e => {
    this.setState({
      size: e.target.value
    })
  };
  render(){
    return(
    <div>
      <Card title="基础按钮">
        <Button type="primary" >Primary</Button>
        <Button href="www.baidu.com">去百度</Button>
        <Button type="dashed">Imooc</Button>
        <Button type="danger">Imooc</Button>
        <Button disabled>Imooc</Button>
      </Card>
      <Card title="图形按钮">
        <Button icon="plus">创建</Button>
        <Button icon="edit">编辑</Button>
        <Button icon="delete">删除</Button>
        <Button shape="circle" icon="search"></Button>
        <Button icon="search">搜索</Button>
        <Button icon="download" type="primary">下载</Button>
      </Card>
      <Card title="Loading按钮">
        <Button type="parmary" loading={this.state.loading}>加载</Button>
        <Button type="parmary" shape="circle" loading={true}></Button>
        <Button loading={true}>点击加载</Button>
        <Button type="parmary"  onClick={this.enterLoading}>关闭</Button>
      </Card>
      <Card title="按钮组">
        <Button.Group>
          <Button style={{marginRight:'0'}}><Icon type="left" />前进</Button>
          <Button><Icon type="right" />返回</Button>
        </Button.Group>
      </Card>
      <Card title="按钮尺寸">
        <Radio.Group value={this.state.size} onChange={this.handleSizeChange }>
          <Radio.Button value="large">large</Radio.Button>
          <Radio.Button value="default">default</Radio.Button>
          <Radio.Button value="small">small</Radio.Button>
        </Radio.Group>
        <br />
        <br />
        <Button type="primary" size={this.state.size}>
          Primary
        </Button>
      </Card>
    </div>
    );
  }
}
export default Buttons;