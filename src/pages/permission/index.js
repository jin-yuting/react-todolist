import React, { Component } from 'react';
import { Card, Button, Table, Modal, Form, Select, Input, Tree } from 'antd';
import axios from '../../axios/index';
import Utils from '../../utils/utils';
import menuConfig from '../../config/menuConfig';
const { Option } = Select;
const { TreeNode } = Tree;

export default class Permission extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: [{
        "id": 1,
        "roleName": "廖洋",
        "authorization": "春雪",
        "status": 1,
        "startTime": "1979-11-03 04:01:04",
        "endTime": "1972-08-04 03:23:45",
        "menus": [
          "/admin/home",
          "/admin/ui/buttons"
        ]
      }],
      page: 1,
      isRoleModal: false,
      selectdItem: [], //选中行数据
      detailInfo: {},
      isPermVisible: false,
      menuInfo:[]
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
          pagination: Utils.pagination(res, (current) => {
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
    this.setState({
      selectdItem: selectedRows
    })
  }
  // 打开创建角色弹框
  handleRole = () => {
    this.setState({
      isRoleModal: true
    })
  }
  //提交角色
  handleSubmit = () => {
    // let roleInfo = this.formRef.props.form.getFieldsValue();
  }
  handlePermEditSubmit = ()=>{
    let data = this.permform.props.form.getFieldsValue();
    console.log(data)
  }
  handlePermission = () => {
    if (this.state.selectdItem.length) {
      this.setState({
        isPermVisible: true,
        detailInfo: this.state.selectdItem[0],
        menuInfo: this.state.selectdItem[0].menus
      })
    } else {
      Modal.info({
        title: '信息',
        content: '请先选择一条数据'
      })
      return;
    }
  }
  render() {
    const columns = [
      {
        title: '角色ID',
        dataIndex: 'id',
        key: 'id',
        width: 100,
      },
      {
        title: '用户名称',
        dataIndex: 'roleName',
        key: 'roleName',
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
        dataIndex: 'status',
        key: 'status',
        width: 150,
        render(status) {
          return status === 1 ? '禁用' : '停用'
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
    return (
      <div>
        <Card>
          <Button type="primary" onClick={this.handleRole}>创建角色</Button>
          <Button onClick={this.handlePermission}>设置权限</Button>
          <Button>用户授权</Button>
        </Card>
        <Table bordered scroll={{ y: 450 }}
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
        <Modal title="设置权限"
          visible={this.state.isPermVisible}
          width={600}
          onCancel={() => {
            this.setState({
              isPermVisible: false
            })
          }}
          onOk={this.handlePermEditSubmit}
          okText="确认"
          cancelText="取消">
          <PermEditForm 
            detailInfo={this.state.detailInfo}
            menuInfo={this.state.menuInfo}
            patchMenuInfo={(checkedKeys)=>{
              this.setState({ menuInfo: checkedKeys });
            }}
            wrappedComponentRef={(form) => { this.permform = form }}
          />
        </Modal>
      </div>
    );
  }
}

class RoleForm extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 }
    }
    return (
      <Form {...formItemLayout} layout="horizontal" >
        <Form.Item label="角色名称">
          {getFieldDecorator('roleName', {
          })(
            <Input placeholder="请输入" />
          )}
        </Form.Item>
        <Form.Item label="状态">
          {getFieldDecorator('status', {
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
RoleForm = Form.create({})(RoleForm);

class PermEditForm extends React.Component {
  onCheck = (checkedKeys)=>{
    this.props.patchMenuInfo(checkedKeys);
  }
  renderTreeNodes = (data)=>{
    return data.map(item=>{
      if(item.children){
        return <TreeNode title={item.title} key={item.key} dataRef={item}>
          {this.renderTreeNodes(item.children)}
        </TreeNode>
      }else{
        return <TreeNode {...item} />
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 }
    }
    const detail_info = this.props.detailInfo;
    const menu_info = this.props.menuInfo;
    return (
      <Form {...formItemLayout} layout="horizontal" >
        <Form.Item label="角色名称">
          <Input placeholder={detail_info.roleName} disabled />
        </Form.Item>
        <Form.Item label="状态">
          {getFieldDecorator('status', {
            initialValue: '1',
          })(
            <Select>
              <Option value='1'>开启</Option>
              <Option value="0">停用</Option>
            </Select>
          )}
        </Form.Item>
        <Tree
          checkable
          defaultExpandAll
          onCheck={(checkedKeys)=>{
            this.onCheck(checkedKeys)
          }}
          checkedKeys={menu_info}
        >
          <TreeNode title="平台权限" key="0-0">
            {this.renderTreeNodes(menuConfig)}
          </TreeNode>
        </Tree>
      </Form>
    );
  }
}
PermEditForm = Form.create({})(PermEditForm);