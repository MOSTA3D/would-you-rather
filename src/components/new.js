import React from "react";
import {connect} from "react-redux";
import { handleAddQuestion } from "../actions/question";
import { Redirect } from "react-router-dom";

class New extends React.Component{
    state={
        op1:"",
        op2:"",
        toHome:false
    }
    handleSubmit = e=>{
        e.preventDefault();
        this.props.dispatch(handleAddQuestion(this.state.op1, this.state.op2));
        this.setState({toHome:true});
    }
    render(){
        if (this.state.toHome === true) {
            return <Redirect to='/home' />
          }
        return(
            <div className="new">
                <h2>Create New Question</h2>
                <hr />
                <h3>Would you rather ...</h3>
                <input onChange={e=>this.setState({op1:e.target.value})} type="text" />
                <h3>OR</h3>
                <input onChange={e=>this.setState({op2:e.target.value})} type="text" />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default connect()(New);