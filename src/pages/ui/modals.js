import React, {Component} from 'react';
import { Card, Button, Modal } from 'antd';
const { confirm } = Modal;

class Modals extends Component{
  state = {
    loading: false,
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal3: false,
  }
  showModal  = (type) =>{
    this.setState({
      [type]: true,
    });
  };
  handleOk = (type) => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, [type]: false });
    }, 3000);
  };

  handleCancel = (type) => {
    this.setState({
      [type]: false
    });
  };
  showConfirm = (type) => {
    Modal[type]({
      title: 'Do you Want to delete these items?',
      content: 'Some descriptions',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  render(){
    return(
      <div>
        <Card title="弹框">
          <Button type="primary" onClick={()=>this.showModal('showModal1') }>Open Modal</Button>
          <Button onClick={()=>this.showConfirm('confirm')}>确认对话框</Button>
          <Button onClick={()=>this.showConfirm('info')}>info</Button>
          <Button onClick={()=>this.showConfirm('success')}>success</Button>
          <Button onClick={()=>this.showConfirm('error')}>error</Button>
          <Button onClick={()=>this.showConfirm('warning')}>warning</Button>
        </Card>
        <Modal
          title="基础弹框"
          visible={this.state.showModal1}
          onOk={()=>this.handleOk('showModal1')}
          onCancel={()=>this.handleCancel('showModal1')}
          footer={[
            <Button key="back" onClick={()=>this.handleCancel('showModal1')}>
              取消
            </Button>,
            <Button key="submit" type="primary" loading={this.state.loading} onClick={()=>this.handleOk('showModal1')}>
              确定
            </Button>,
          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    )
  }
}
export default Modals;