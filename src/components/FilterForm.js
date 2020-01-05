import React from 'react';
import { Form, Input, Select, Button } from 'antd';
const { Option } = Select;

class FilterForm extends React.Component {
    render() {
        return (
            <Form layout="inline">
                <Form.Item label='城市名称'>
                    <Input placeholder="请输入" />
                </Form.Item>
                <Form.Item label='用车模式'>
                    <Select defaultValue="2" style={{ width: 170 }} >
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                    </Select>
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
export default Form.create()(FilterForm);