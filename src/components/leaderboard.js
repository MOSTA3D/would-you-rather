import React from "react";
import { connect } from "react-redux"

class LeaderBoard extends React.Component{
    render(){
        // const [nAns, nQs] = [Object.keys(user.answers).length, user.questions.length];
        
        return(
            <div>
                {Object.values(this.props.users).sort((a,b)=>{
                    const [aSum, bSum] = [(Object.keys(a.answers).length + a.questions.length), (Object.keys(b.answers).length + b.questions.length)];
                    return bSum-aSum
                }).map(user=>{
                    const [nAns, nQs] = [Object.keys(user.answers).length, user.questions.length];
                    return(
                        <li className="leader-card">
                            <img src={user.avatarURL} />
                            <div>
                                <p>answered questions : {nAns}</p>
                                <p>Created questions : {nQs} </p>
                            </div>
                            <div>
                                <h3>Score</h3>
                                <div>{nAns+nQs}</div>
                            </div>
                        </li>
                )})}
            </div>
        )
    }
}
function mapStateToProps({user}){
    return {
        users: user
    }
}

export default connect(mapStateToProps)(LeaderBoard);