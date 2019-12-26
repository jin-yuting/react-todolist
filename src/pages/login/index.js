import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './login.less';

class Login extends React.Component {
  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <div className="login-content">
        <Form className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              initialValue: 'admin',
              rules: [{ required: true, message: '请输入用户名!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              initialValue: '123456',
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="">
              忘记密码
            </a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
            <a href="">去注册</a>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
export default Form.create()(Login);