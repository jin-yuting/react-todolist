import React from 'react';
import moment from 'moment';
import { Card, Table, Button, Modal, Form, Select, message } from 'antd';
import FilterForm from '../../components/FilterForm';
import axios from '../../axios/index';
import Utils from '../../utils/utils';
const { Option } = Select;

export default class cityTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: [],
      page: 1,
      isSHowOpenCity: false
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

  formatterTime = (val) => {
    return val ? moment(val).format('YYYY-MM-DD HH:mm:ss') : ''
  }
  //动态获取数据
  requestData = () => {
    axios.requestList(this,'/city/list',this.state.page)
  }
  // 开通城市弹筐
  handleOpenCity = () => {
    this.setState({
      isSHowOpenCity: true
    })
  }
  handleSubmit = () => {
    let cityInfo = this.formRef.props.form.getFieldsValue();
    axios.ajax({
      url: '/city/open',
      data: {
        params: cityInfo
      }
    }).then((res) => {
      if (res.code === 0) {
        message.success('开通成功');
        this.setState({
          isSHowOpenCity: false
        })
        this.requestData()
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
        title: '城市名称',
        dataIndex: 'userCity',
        key: 'userCity',
        width: 100,
      },
      {
        title: '用车模式',
        dataIndex: 'carModel',
        key: 'carModel',
        width: 100,
      },
      {
        title: '运营模式',
        dataIndex: 'runModel',
        key: 'runModel',
        width: 100,
      },
      {
        title: '授权加盟商',
        dataIndex: 'dealer',
        key: 'dealer',
        width: 150,
      },
      {
        title: '城市管理员',
        dataIndex: 'state',
        key: 'state',
        width: 150,
      },
      {
        title: '城市开通时间',
        dataIndex: 'cityTime',
        key: 'cityTime',
        width: 130,
      },
      {
        title: '操作时间',
        dataIndex: 'operation',
        key: 'operation',
        width: 150,
        render: this.formatterTime
      },
      {
        title: '操作人',
        dataIndex: 'operationUser',
        key: 'operationUser',
      },
    ]
    return (
      <div>
        <Card>
          <FilterForm />
          <Button onClick={this.handleOpenCity}>开通城市</Button>
        </Card>
        <Table bordered scroll={{ y: 320 }}
          pagination={this.state.pagination}
          rowKey={record => record.id}
          dataSource={this.state.dataSource}
          columns={columns} />
        <Modal title="开通城市"
          visible={this.state.isSHowOpenCity}
          onCancel={() => {
            this.setState({
              isSHowOpenCity: false
            })
          }}
          onOk={this.handleSubmit}
          okText="确认"
          cancelText="取消">
          <OpenCityForm wrappedComponentRef={(form) => { this.formRef = form }} />
        </Modal>
      </div>
    )
  }
}

class OpenCityForm extends React.Component {
  render() {
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 }
    }
    const { getFieldDecorator } = this.props.form;
    return (
      <Form {...formItemLayout} layout="horizontal" >
        <Form.Item label="选择城市">
          {getFieldDecorator('cityid', {
            initialValue: '1',
          })(
            <Select style={{ width: 100 }}>
              <Option value="">全部</Option>
              <Option value='1'>北京市</Option>
              <Option value="2">天津市</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label="运营模式">
          {getFieldDecorator('runid', {
            initialValue: '1',
          })(
            <Select style={{ width: 100 }}>
              <Option value="">自营</Option>
              <Option value='1'>加盟</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label="用车模式">
          {getFieldDecorator('carid', {
            initialValue: '1',
          })(
            <Select style={{ width: 100 }}>
              <Option value="1">指定停车点</Option>
              <Option value="2">禁停区</Option>
            </Select>
          )}
        </Form.Item>
      </Form>
    )
  }
}
OpenCityForm = Form.create()(OpenCityForm);
