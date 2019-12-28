import React from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import './style.less';

class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success('登陆成功！');

      }
    });
  };
  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <div className="login-content">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              initialValue: 'admin',
              rules: [{ required: true, message: '请输入用户名!' },{pattern:/^\w+$/g,message:'用户名必须为字母或数字'}],
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
              rules: [{ required: true, message: '请输入密码!' },{min:5,max:10,message: '长度不在范围内5-10'}],
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
              initialValue: false,
            })(<Checkbox>记住密码</Checkbox>)}
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