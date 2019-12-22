import React from 'react';
import { connect } from 'react-redux';
import { changeName } from '../actions';

class Child2 extends React.Component{
    constructor(props){
        super(props);
        this.fn = this.fn.bind(this);
    }
    fn(){
        this.props.changeName(this.refs.name.value);
        this.refs.name.value = '';
    }
    render(){
        return(
            <div>
                <input type="text" ref="name"/>
                <input type="button" value="改名字" onClick={this.fn}/>
            </div>
        )
    }
}

export default connect(
    (state,props)=>(Object.assign({},props,state)),
    {changeName}
)(Child2);