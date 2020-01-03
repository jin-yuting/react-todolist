import React from 'react';
import { Card, Table } from 'antd';
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
  render() {
    const columns = [
      {
        title: '序列号',
        dataIndex: 'id',
        key: 'id'
      },
      {
        title: '用户名',
        dataIndex: 'userName',
        key: 'userName'
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        render(sex) {
          return sex === 1 ? '男' : '女'
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        key: 'state',
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
        render(interest) {
          let config = {
            '1': '阅读',
            '2': '旅行',
            '3': '探险',
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
        key: 'birthday'
      },
      {
        title: '地址',
        dataIndex: 'address',
        key: 'address'
      },
      {
        title: '早起时间',
        dataIndex: 'time',
        key: 'time'
      }
    ];
    const rowSelection = {
      type: 'checkbox',
      onChange: this.onSelectChange
    };
    return (
      <div>
        <Card title='基础表格'>
          <Table bordered 
          pagination={this.state.pagination} 
          rowSelection={rowSelection} 
          rowKey={record => record.id} 
          dataSource={this.state.dataSource} 
          columns={columns} />
        </Card>
      </div>
    )
  }
}
export default basicTable;