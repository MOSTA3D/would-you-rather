import React from "react";
import { connect } from "react-redux";
import login from "../actions/authed";

class Login extends React.Component{

    state = {user:null}
    handleSelectChange = e =>{
        this.setState({user:this.props.user[e.target.value]})
    }
    handleSubmit = e=>{
        e.preventDefault();
        this.props.dispatch(login(this.state.user));
    }
    render(){
        const { user } = this.props;
        return(
            <div className="login">
                <h3>Welcome to WYR Championship</h3>
                {/* <h6>Sign in to continue</h6> */}
                <div>
                    <img src="https://www.wouldyouratherquestions.com/logo.png" alt="would you rather logo" />
                    <h2>Sign in</h2>
                </div>
                <select onChange={this.handleSelectChange} >
                    <option disabled={true} selected value={null}>pick a user</option>
                    {user&&Object.values(user).map(users=><option key={users.id} value={users.id} style={{backgroundImage: "https://www.wouldyouratherquestions.com/logo.png"}}>{users.name}</option>)}
                </select>
                <button onClick={this.handleSubmit}>Sign in</button>
            </div>
        )
    }
}
function mapStateToProps({user}){
    return {
        user
    }
}
export default connect(mapStateToProps)(Login)