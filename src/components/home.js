import React from "react";
import { connect } from "react-redux";
import MinPull from "./minpull";

class Home extends React.Component{
    state={
        answered: false
    }

    login = this.props.login;
    
    fltrUnAnsQs = q=>{
        for(const aqid of Object.keys(this.login.answers)){
            if(aqid === q.id) return false;
        }
        return true;
    }
    render(){
        const questions = this.props.question;
        const {answered} = this.state;
        return(
            <div className="home">
                <div>
                    <span className={`btn ${!answered&&"active"}`} onClick={e=>this.setState({answered:false})}> Unanswered questions </span>
                    <span className={`btn ${answered&&"active"}`} onClick={e=>this.setState({answered:true})}> Answered questions </span>
                </div>
                {answered?(
                    <ul>
                        {Object.keys(this.login.answers).reverse().map(qid=><MinPull key={qid} author={this.props.user[questions[qid].author]} question={questions[qid]} />)}
                    </ul>
                ):(
                    <ul>
                        {Object.values(questions).filter(q=>this.fltrUnAnsQs(q)).sort((a,b)=>b.timestamp-a.timestamp).map(uq=><MinPull key={uq.id} author={this.props.user[uq.author]} question={uq} />)}
                    </ul>
                )}
                
            </div>
        )
    }
}

function mapStateToProps({user,question,login}){
    return {
        question,
        login,
        user,
    }
}

export default connect(mapStateToProps)(Home);