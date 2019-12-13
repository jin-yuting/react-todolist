import React, { Component } from 'react';

class Base extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 1
    }
  }
  render(){
    return(
    <div>
      基础界面=>{this.state.count}
    </div>
    );
  }
}
export default Base;