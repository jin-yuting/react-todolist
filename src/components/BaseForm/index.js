import React from 'react';
import { Form, Input, Select, Button,Checkbox } from 'antd';
import Utils from '../../utils/utils';

class FilterForm extends React.Component {
  handleFilterSubmit =() =>{
    let fieldsValue = this.props.form.getFieldsValue();
    this.props.filterSubmit(fieldsValue);
  }
  initFormList = () => {
    const { getFieldDecorator } = this.props.form;
    const formList = this.props.formList;
    const formItemList = [];
    if (formList && formList.length > 0) {
      formList.forEach((item) => {
        let label = item.label;
        let field = item.field;
        let initialValue = item.initialValue || '';
        let placeHolder = item.placeholder;
        let width = item.width;
        if (item.type === 'INPUT') {
          const INPUT = <Form.Item label={label} key={field}>
            {getFieldDecorator([field], {
              initialValue: initialValue
            })(
              <Input type='text' placeholder={placeHolder} />
            )}
          </Form.Item>
          formItemList.push(INPUT);
        } else if (item.type === 'SELECT') {
          const SELECT = <Form.Item label={label} key={field}>
            {getFieldDecorator([field], {
              initialValue: initialValue
            })(
              <Select style={{ width: width }} placeholder={placeHolder}>
                {Utils.getOptionList(item.list)}
              </Select>
            )}
          </Form.Item>
          formItemList.push(SELECT);
        }else if (item.type === 'CHECKBOX') {
          const CHECKBOX = <Form.Item label={label} key={field}>
            {getFieldDecorator([field], {
              valuePropName: 'checked',
              initialValue: initialValue
            })(
              <Checkbox>
                {label}
              </Checkbox>
            )}
          </Form.Item>
          formItemList.push(CHECKBOX);
        }
      })
    }
    return formItemList;
  }
  render() {
    return (
      <Form layout="inline">
        { this.initFormList() }
        <Form.Item>
          <Button type="primary" onClick={this.handleFilterSubmit}>查询</Button>
        </Form.Item>
        <Form.Item>
          <Button onClick={this.handleRest}>重置</Button>
        </Form.Item>
      </Form>
    )
  }
}
export default Form.create()(FilterForm);