import React from 'react';
import { Card, Table, Input, Badge, Button, Popconfirm, message, Modal, Form, Radio, DatePicker, Select } from 'antd';
import BaseForm from '../../components/BaseForm/index';
import axios from '../../axios/index';
import RadioGroup from 'antd/lib/radio/group';
const { Option } = Select;
const { TextArea } = Input;

export default class UserTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: [], //列表数据
      page: 1, // 页码
      formList: [ // 搜索
          {
            type:'INPUT',
            label: '用户名',
            field: 'userName',
            placeholder:'请输入用户名',
            width:100,
          },
          {
            type:'INPUT',
            label: '手机号',
            field: 'phone',
            placeholder:'请输入手机号',
            width:100,
          },
          {
            type:'DATE',
            label: '选择日期',
            field: 'date',
            placeholder:'请输入日期',
            width:200,
          }
      ],
      type:'',
      isVisible: false, // 模态框
      title:''
    }
  }
  componentWillUnmount = () => {
    this.setState = (state, callback) => {
      return;
    };

    // clearTimeout(timer);
  }
  componentDidMount() {
    this.requestData()
  }
  //动态获取数据
  requestData = () => {
    axios.requestList(this,'/table/list',this.state.page);
  }
  // 数据列表选择
  onSelectChange = (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  }
  // 排序操作
  handleChange =(pagination, filters, sorter)=>{
    console.log('params', pagination, filters, sorter)
  }
  // 删除操作
  handleDelete = (item)=>{
    console.log('shiy', item)
  }
  // 确定气泡确定
  confirm =(e)=>{
    message.success('Click on Yes');
  }
  // 确定气泡取消
  cancel =(e)=>{
    message.error('Click on No');
  }
  // 操作 || 添加/详情/编辑/删除
  handleOperate = (type)=>{
    if(type === 'create'){
      this.setState({
        type,
        isVisible: true,
        title:'创建员工'
      })
    }
  }
  // 提交创建员工
  handleSubmit=()=>{
    let type = this.state.type;;
    let data = this.formRef.props.form.getFieldsValue();
    console.log(data)
    this.setState({
      isVisible: false
    })
    this.formRef.props.form.resetFields();
    axios.ajax({
      url:'/user/add',
      data:{
        params: data
      }
    }).then((res)=>{
      if(res.code === 0){
        this.setState({
          isVisible: false
        })
        this.requestData();
      }
    })
  }
  render() {
    const columns = [
      {
        title: '序列号',
        dataIndex: 'id',
        key: 'id',
        width: 100,
      },
      {
        title: '用户名',
        dataIndex: 'userName',
        key: 'userName',
        width: 100,
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        width: 100,
        defaultSortOrder: 'ascend',
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        width: 100,
        render(sex) {
          return sex === 1 ? '男' : '女'
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        key: 'state',
        width: 150,
        render(state) {
          let config = {
            '1': '咸鱼一条',
            '2': '咸鱼二条',
            '3': '咸鱼三条',
            '4': '咸鱼四条',
            '5': '咸鱼五条'
          }
          return config[state]
        }
      },
      {
        title: '爱好',
        dataIndex: 'interest',
        key: 'interest',
        width: 100,
        render(interest) { // 未使用箭头函数，只是简单的返回
          let config = {
            '1': <Badge status="success" text="阅读"/>,
            '2': <Badge status="default" text="旅行"/>,
            '3': <Badge status="warning" text="探险"/>,
            '4': '看电影',
            '5': '美食',
            '6': '思考',
            '7': '滑板',
            '8': '攀岩'
          }
          return config[interest]
        }
      },
      {
        title: '生日',
        dataIndex: 'birthday',
        key: 'birthday',
        width: 100,
      },
      {
        title: '早起时间',
        dataIndex: 'time',
        key: 'time',
      },
      {
        title: '联系地址',
        dataIndex: 'address',
        width: 250,
        key: 'address',
      },
      {
        title:'操作',
        fixed: 'right',
        width: 100,
        render: (text,item)=>{ //使用箭头函数
          return <Popconfirm
          title="确定删除吗?"
          onConfirm={this.confirm}
          onCancel={this.cancel}
          okText="确定"
          cancelText="取消"
        >
          <Button size="small" onClick={(item)=>{this.handleDelete(item)}}>删除</Button>
        </Popconfirm>
        }
      }
    ];
    const rowSelection = {
      type: 'checkbox',
      fixed: 'left',
      onChange: this.onSelectChange
    };
    return (
      <div>
          <Card>
            <BaseForm formList={this.state.formList} />
            <Button icon='plus' onClick={()=>this.handleOperate('create')}>创建员工</Button>
            <Button icon='edit' onClick={()=>this.handleOperate('edit')}>编辑员工</Button>
            <Button onClick={()=>this.handleOperate('detail')}>员工详情</Button>
            <Button icon='delete' onClick={()=>this.handleOperate('delete')}>删除员工</Button>
          </Card>
          <Table bordered scroll={{ x: 1300, y: 450 }} 
            pagination={this.state.pagination} 
            rowSelection={rowSelection} 
            rowKey={record => record.id} 
            dataSource={this.state.dataSource} 
            columns={columns}
            onChange={this.handleChange} />
          <Modal 
            title={this.state.title}
            width={600}
            visible={this.state.isVisible}
            onOk={this.handleSubmit}
            onCancel={()=>{
              this.formRef.props.form.resetFields();
              this.setState({
                isVisible: false
              })
            }}
            >
            <UserForm  type={this.state.type} wrappedComponentRef={(form) => { this.formRef = form }}/>
          </Modal>
      </div>
    )
  }
}
class UserForm extends React.Component{
  render(){
    const { getFieldDecorator } = this.props.form;
    const formItemLayout ={
      labelCol:{span:5},
      wrapperCol:{span:16}
    }
    return(
      <Form layout='horizontal'>
        <Form.Item label='用户名' {...formItemLayout}>
          {getFieldDecorator('userName', {
            })(
              <Input type='text' placeholder='请输入用户名' />
          )}
        </Form.Item>
        <Form.Item label='性别' {...formItemLayout}>
          {getFieldDecorator('sex', {
            })(
              <RadioGroup>
                <Radio value ={1}>男</Radio>
                <Radio value ={2}>女</Radio>
              </RadioGroup>
          )}
        </Form.Item>
        <Form.Item label='状态' {...formItemLayout}>
          {getFieldDecorator('status', {
            })(
              <Select>
                <Option value={1}>咸鱼一条</Option>
                <Option value={2}>斜杠青年</Option>
                <Option value={3}>自有职业者</Option>
              </Select>
          )}
        </Form.Item>
        <Form.Item label='生日' {...formItemLayout}>
          {getFieldDecorator('date', {
            })(
              <DatePicker />
          )}
        </Form.Item>
        <Form.Item label='联系地址' {...formItemLayout}>
          {getFieldDecorator('address', {
            })(
              <TextArea rows={2} placeholder='请输入联系地址'/>
          )}
        </Form.Item>
      </Form>
    )
  }
}
UserForm = Form.create({})(UserForm)