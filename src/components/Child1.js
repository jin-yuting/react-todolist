import React from 'react';
import { connect } from 'react-redux';
import { addAge } from '../actions';

class Child1 extends React.Component{
    constructor(props){
        super(props);
        this.fn = this.fn.bind(this);
    }
    fn(){
        this.props.addAge(5);
    }
    render(){
        return(
            <div>
                <input type="button" value="加5" onClick={this.fn} id=""/>
            </div>
        )
    }
}

export default connect(
    (state,props)=>(Object.assign({},props,state)),
    {addAge}
)(Child1);