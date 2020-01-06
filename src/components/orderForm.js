import React from 'react';
import { Form, Select, Button,DatePicker  } from 'antd';
import locale from 'antd/lib/date-picker/locale/zh_CN';

const { Option } = Select;
const { RangePicker } = DatePicker;

class orderForm extends React.Component {
  onChange = (date, dateString)=> {
    console.log(date, dateString);
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline">
        <Form.Item label='城市时间'>
        {getFieldDecorator('time', {
          })(
            <RangePicker locale={locale} onChange={this.onChange} format="YYYY/MM/DD HH:mm:ss"/>
          )}
        </Form.Item>
        <Form.Item label='状态'>
          {getFieldDecorator('status', {
            initialValue: '1',
          })(
            <Select style={{ width: 170 }}>
              <Option value="">全部</Option>
              <Option value="1">进行中</Option>
              <Option value="2">结束行程</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary">查询</Button>
        </Form.Item>
        <Form.Item>
          <Button >重置</Button>
        </Form.Item>
      </Form>
    )
  }
}
export default Form.create()(orderForm);