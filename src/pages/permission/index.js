import React, { Component } from 'react';
import { Card, Button, Table, Modal, Form, Select, Input } from 'antd';
import axios from '../../axios/index';
import Utils from '../../utils/utils';
const { Option } = Select;

export default class Permission extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: [{
        "id": 1,
        "userName": "廖洋",
        "authorization": "春雪",
        "status": 1,
        "startTime": "1979-11-03 04:01:04",
        "endTime": "1972-08-04 03:23:45",
      }],
      page: 1,
      isRoleModal: false
    }
  }
  componentDidMount() {
    this.requestData()
  }
  //动态获取数据
  requestData = () => {
    axios.ajax({
      url: '/role/list',
      data: {
        params: {
          page: this.state.page
        }
      }
    }).then((res) => {
      if (res.code === 0) {
        this.setState({
          dataSource: res.result,
          pagination: Utils.pagination(res,(current)=>{
            this.setState({
              page: current
            })
            this.requestData()
          })
        })
      }
    })
  }
  // 数据列表选择
  onSelectChange = (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  }
  // 打开创建角色弹框
  handleRole = () => {
    this.setState({
      isRoleModal: true
    })
  }
  //提交角色
  handleSubmit = () => {
    let roleInfo = this.formRef.props.form.getFieldsValue();
    console.log(roleInfo)
  }
  handlePermission = ()=>{
    
  }
  render(){
    const columns = [
      {
        title: '角色ID',
        dataIndex: 'id',
        key: 'id',
        width: 100,
      },
      {
        title: '用户名称',
        dataIndex: 'userName',
        key: 'userName',
        width: 100,
      },
      {
        title: '创建时间',
        dataIndex: 'startTime',
        key: 'startTime',
        width: 200,
      },
      {
        title: '使用状态',
        dataIndex: 'state',
        key: 'state',
        width: 150,
        render(state){
          return state === 1 ? '禁用':'停用'
        }
      },
      {
        title: '授权时间',
        dataIndex: 'endTime',
        key: 'endTime',
        width: 200,
      },
      {
        title: '授权人',
        dataIndex: 'authorization',
        key: 'authorization',
      },
    ];
    const rowSelection = {
      type: 'checkbox',
      fixed: 'left',
      onChange: this.onSelectChange
    };
    return(
    <div>
      <Card>
          <Button type="primary" onClick={this.handleRole}>创建角色</Button>
          <Button onClick={this.handlePermission}>设置权限</Button>
          <Button>用户授权</Button>
        </Card>
        <Table bordered 
          pagination={this.state.pagination}
          rowSelection={rowSelection}
          rowKey={record => record.id}
          dataSource={this.state.dataSource}
          columns={columns} />
          <Modal title="创建角色"
          visible={this.state.isRoleModal}
          onCancel={() => {
            this.setState({
              isRoleModal: false
            })
          }}
          onOk={this.handleSubmit}
          okText="确认"
          cancelText="取消">
          <RoleForm wrappedComponentRef={(form) => { this.formRef = form }} />
        </Modal>
    </div>
    );
  }
}

class RoleForm extends React.Component {
  render() {
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 }
    }
    const { getFieldDecorator } = this.props.form;
    return (
      <Form {...formItemLayout} layout="horizontal" >
        <Form.Item label="角色名称">
          {getFieldDecorator('roleName', {
          })(
            <Input placeholder="请输入" />
          )}
        </Form.Item>
        <Form.Item label="状态">
          {getFieldDecorator('state', {
            initialValue: '1',
          })(
            <Select>
              <Option value='1'>开启</Option>
              <Option value="2">关闭</Option>
            </Select>
          )}
        </Form.Item>
      </Form>
    )
  }
}
RoleForm = Form.create()(RoleForm);