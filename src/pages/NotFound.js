import React, { Component } from 'react';

class NotFound extends Component{
  render(){
    let mainStyle = {
      height: '100%', 
      background: '#ececec',
      overflow: 'hidden'
    }
    return(
      <div style={mainStyle}>
        到不了
      </div>
    )
  }
}
export default NotFound;