import React from 'react';
import { Card, Table, Badge, Button, Popconfirm, message } from 'antd';
import axios from '../../axios/index';
import Utils from '../../utils/utils';

class basicTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: [],
      page: 1
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
    let _that = this;
    axios.ajax({
      url: '/table/list',
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
            _that.setState({
              page: current
            })
            _that.requestData()
          })
        })
      }
    })
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
        title: '地址',
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
        <Card title='基础表格'>
          <Table bordered scroll={{ x: 1300, y: 450 }} 
          pagination={this.state.pagination} 
          rowSelection={rowSelection} 
          rowKey={record => record.id} 
          dataSource={this.state.dataSource} 
          columns={columns}
          onChange={this.handleChange} />
        </Card>
      </div>
    )
  }
}
export default basicTable;