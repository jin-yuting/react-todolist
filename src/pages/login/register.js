import React from 'react';
import moment from 'moment';
import {Form, Input, Radio, Checkbox, Button, InputNumber, Select, Switch,DatePicker, Upload, Modal } from 'antd';
import './style.less';
const { TextArea } = Input;
function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
}
class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [
                {
                  uid: '-1',
                  name: 'image.png',
                  status: 'done',
                  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                }
            ]
        }
    }
    handlePreview = async file => {
        if (!file.url && !file.preview) {
          file.preview = await getBase64(file.originFileObj);
        }
    
        this.setState({
          previewImage: file.url || file.preview,
          previewVisible: true,
        });
      };
    handleChange = ({ fileList }) => this.setState({ fileList });
    handleCancel = () => this.setState({ previewVisible: false });
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    };
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
        const tailFormItemLayout = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 16,
                offset: 8,
              },
            },
          };
        return(
            <div className="register-container">
                <Form {...formItemLayout} className="register-form" onSubmit={this.handleSubmit}>
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
                    <Form.Item label="性别">
                        {getFieldDecorator('sex', {
                            initialValue: '1',
                        })(
                            <Radio.Group>
                                <Radio value='1'>男</Radio>
                                <Radio value='2'>女</Radio>
                            </Radio.Group>
                        )}
                    </Form.Item>
                    <Form.Item label="年龄">
                        {getFieldDecorator('age', {
                            initialValue: 27,
                        })(
                            <InputNumber min={1} max={100} />
                        )}
                    </Form.Item>
                    <Form.Item label="当前状态">
                        {getFieldDecorator('state', {
                            initialValue: '1',
                        })(
                            <Select>
                                <Option value="1">咸鱼一条</Option>
                                <Option value="2">风华浪子</Option>
                            </Select>
                        )}
                    </Form.Item>
                    <Form.Item label="爱好">
                        {getFieldDecorator('interest', {
                            initialValue: ['1','2'],
                        })(
                            <Select mode="multiple">
                                <Option value="1">阅读</Option>
                                <Option value="2">旅行</Option>
                                <Option value="3">健身</Option>
                            </Select>
                        )}
                    </Form.Item>
                    <Form.Item label="是否已婚">
                        {getFieldDecorator('isMarried', {
                            initialValue: false,
                            valuePropName: 'checked',
                        })(
                            <Switch />
                        )}
                    </Form.Item>
                    <Form.Item label="生日">
                        {getFieldDecorator('birthday', {
                            initialValue: moment('2019-09-25'),
                        })(
                            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                        )}
                    </Form.Item>
                    <Form.Item label="联系地址">
                        {getFieldDecorator('address', {
                            initialValue: '',
                        })(
                            <TextArea rows={2} />
                        )}
                    </Form.Item>
                    <Form.Item label="头像">
                        {getFieldDecorator('userImg')(
                            <div>
                                <Upload 
                                    listType='picture-card'
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    fileList={this.state.fileList}
                                    onPreview={this.handlePreview}
                                    onChange={this.handleChange}
                                ></Upload>
                                <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
                                    <img alt="example" style={{ width: '100%' }} src={this.state.previewImage} />
                                </Modal>
                            </div>
                        )}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        {getFieldDecorator('agreement', {
                            valuePropName: 'checked',
                        })(
                            <Checkbox>
                            我已阅读相关<a href="">协议</a>
                            </Checkbox>,
                        )}
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            注册
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default Form.create()(Register);