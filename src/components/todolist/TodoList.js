import React, { Component,Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props){
    super(props)
    this.state={
      list:[],
      inputValue:''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }
  handleInputChange(e){
    this.setState({
      inputValue:e.target.value
    })
  }
  handleBtnClick (){
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
    })
  }
  handleDelete (index){
    const list = [...this.state.list];
    list.splice(index,1);
    this.setState({
      list
    })
  }
  getTodoItems (){
    return(
      this.state.list.map((item,index)=>{
        return <TodoItem delete={this.handleDelete} key={item} content={item} index={index}/>
      })
    )
  }
  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange}/>
          <button className='red-btn' onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>
          {
            this.getTodoItems()
          }
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;
