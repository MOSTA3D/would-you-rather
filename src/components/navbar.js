import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import logout from "../actions/authed";

class Navbar extends React.Component{
    render(){
        const {login} = this.props;
        return(
            <div>
                <nav>
                    <ul id="navbar-list">
                        <Link to="/home"><li>Home</li></Link>
                        <Link to="/new"><li>New question</li></Link>
                        <Link to="/leaderboard"><li>Leaderboard</li></Link>
                    </ul>
                    {login&&(
                        <div>
                            <span>Hello {login.name.split(" ")[0]} &nbsp; <img src={this.props.login&&this.props.login.avatarURL} alt="avatar icon" style={{width:"20px"}} /></span>
                            <span style={{cursor: "pointer"}} onClick={e=>this.props.dispatch(logout(null))}>Logout</span>
                        </div>
                    )}
                </nav>
            </div>
        )
    }
}

function mapStateToProps({login}){
    return{
        login,
    }
}

export default connect(mapStateToProps)(Navbar);