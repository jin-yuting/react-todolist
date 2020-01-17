import React, { Component } from 'react';
import { Card, Button, Modal } from 'antd';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default class Draft extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: '',
      visible: false,
      contentState: {} //文本内容
    }
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState
    })
  }
  // 清空内容
  handleClearContenet = () => {
    this.setState({
      editorState: ''
    })
  }
  // 获取html
  handleGetText = () => {
    this.setState({
      visible: true
    })
  }
  onContentStateChange: Function = (contentState) => {
    this.setState({
      contentState
    });
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Card>
          <Button type="primary" onClick={this.handleClearContenet}>清空内容</Button>
          <Button onClick={this.handleGetText}>获取html文本</Button>
        </Card>
        <Card style={{ height: '580px' }}>
          <Editor
            editorState={this.state.editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={this.onEditorStateChange}
            onContentStateChange={this.onContentStateChange}
          />
        </Card>
        <Modal
          title="html内容"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        {draftToHtml(this.state.contentState)}
        </Modal>
      </div >
    );
  }
}