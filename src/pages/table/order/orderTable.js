import React from 'react';
import { Card, Table, Button, Modal } from 'antd';
import OrderForm from '../../../components/orderForm';
import axios from '../../../axios/index';
import Utils from '../../../utils/utils';

export default class cityTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: [], //table源数据
      page: 1,
      selectdItem: [] //选中行数据
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
    axios.ajax({
      url: '/order/list',
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
  // 订单详情
  openOrderDetail = () =>{
    let item = this.state.selectdItem;
    if(item.length){
      console.log('456')
      window.open(`/#/ordre/detail/${item.orderId}`,'_blank')
    } else {
      Modal.info({
        title:'信息',
        content:'请先选择一条订单'
      })
      return;
    }
  }
  // 数据列表选择
  onSelectChange = (selectedRowKeys, selectedRows) => {
    this.setState({
      selectdItem: selectedRows
    })
  }
  render() {
    const columns = [
      {
        title: '订单编号',
        dataIndex: 'orderId',
        key: 'orderId',
        width: 120,
        fixed: 'left',
      },
      {
        title: '车辆编号',
        dataIndex: 'bikeSn',
        key: 'bikeSn',
        width: 120,
        fixed: 'left',
      },
      {
        title: '用户名',
        dataIndex: 'userName',
        key: 'userName',
        width: 100,
      },
      {
        title: '手机号',
        dataIndex: 'mobile',
        key: 'mobile',
        width: 100,
      },
      {
        title: '里程',
        dataIndex: 'distance',
        key: 'distance',
        width: 150,
      },
      {
        title: '行驶时长',
        dataIndex: 'totalTime',
        key: 'totalTime',
        width: 150,
      },
      {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        width: 130,
      },
      {
        title: '开始时间',
        dataIndex: 'startTime',
        key: 'startTime',
        width: 150,
      },
      {
        title: '结束时间',
        dataIndex: 'endTime',
        key: 'endTime',
        width: 150,
      },
      {
        title: '订单金额',
        dataIndex: 'totalFee',
        key: 'totalFee',
        width: 150,
      },
      {
        title: '实付金额',
        dataIndex: 'userPlay',
        key: 'userPlay',
        width: 150,
      },
    ]
    const rowSelection = {
      type: 'radio',
      fixed: 'left',
      onChange: this.onSelectChange
    };
    return (
      <div>
        <Card>
          <OrderForm />
          <Button onClick={this.openOrderDetail}>订单详情</Button>
          <Button >结束订单</Button>
        </Card>
        <Table bordered scroll={{ x: 1300, y: 400 }}
          pagination={this.state.pagination}
          rowSelection={rowSelection}
          rowKey={record => record.id}
          dataSource={this.state.dataSource}
          columns={columns} />
      </div>
    )
  }
}

