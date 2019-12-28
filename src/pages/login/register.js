import React from 'react';
import {Form, Icon, Input, Button } from 'antd';
import './style.less';

class Register extends React.Component{
    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
        };
        return(
            <div className="register-container">
                <Form {...formItemLayout} className="register-form">
                    <Form.Item label='用户名'>
                        {getFieldDecorator('username', {
                        initialValue: '',
                        rules: [{ required: true, message: '用户名不能为空!' }],
                        })(
                        <Input placeholder="请输入用户名" />,
                        )}
                    </Form.Item>
                    <Form.Item label="密码" hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [
                            {
                                required: true,
                                message: '请输入密码!',
                            },
                            {
                                validator: this.validateToNextPassword,
                            },
                            ],
                        })(<Input.Password />)}
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default Form.create()(Register);