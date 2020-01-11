import React from 'react';
import { Card, Table, Button, Modal } from 'antd';
import BaseForm from '../../../components/BaseForm/index';
import axios from '../../../axios/index';
import Utils from '../../../utils/utils';

export default class orderTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: [], //table源数据
      page: 1,
      selectdItem: [], //选中行数据
      formList:[
        {
          type:'SELECT',
          label: '城市',
          placeholder:'全部',
          initialValue:"2",
          field: 'city',
          width:100,
          list:[{id:'0',name:'全部'},{id:'1',name:'北京'},{id:'2',name:'上海'}]
        },
        {
          type:'时间查询'
        },
        {
          type:'SELECT',
          label: '订单状态',
          placeholder:'全部',
          initialValue:'1',
          field: 'status',
          width: 100,
          list:[{id:'0',name:'全部'},{id:'1',name:'进行中'},{id:'2',name:'结束行程'}]
        },
      ]
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
    // let _this = this;
    axios.requestList(this,'/order/list',this.state.page)
    // axios.ajax({
    //   url: '/order/list',
    //   data: {
    //     params: {
    //       page: this.state.page
    //     }
    //   }
    // }).then((res) => {
    //   if (res.code === 0) {
    //     this.setState({
    //       dataSource: res.result,
    //       pagination: Utils.pagination(res, (current) => {
    //         this.setState({
    //           page: current
    //         })
    //         this.requestData()
    //       })
    //     })
    //   }
    // })
  }
  // 订单详情
  openOrderDetail = () =>{
    let item = this.state.selectdItem;
    if(item.length){
      window.open(`/#/common/order/detail/${item[0].userId}`,'_blank')
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
  //查询
  handleFilter =(params)=>{
    console.log(params)
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
          <BaseForm formList={this.state.formList} filterSubmit={this.handleFilter} />
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
