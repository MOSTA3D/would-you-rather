import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { handleAnswerQuestion } from "../actions/question";

class Pull extends React.Component{
    isAnswered(aQs, qid){
        for(const q of aQs){
            if(q===qid) return true;
        }
        return false;
    }
    constructor(props){
        super(props);
        this.state = {
            answer:"optionOne"
        }
    }
    isOp1(votes, uid){
        for(const vote of votes){
            if(vote===uid) return true
        }
        return false
    }

    handleRadioChange = e=>{
        this.setState({answer:e.target.value})
    }

    handleSubmit = e=>{
        e.preventDefault();
        this.props.dispatch(handleAnswerQuestion(this.props.myQuestion.id, this.state.answer))
        // this.setState({answered:true});
    }
    render(){
        const {authedUser, myQuestion, author} = this.props;

        if(!myQuestion) return(<div style={{width: "400px", margin:"50px auto"}}>404 not found<img style={{ borderRadius:"0", width:"100%",height:"500px"}} src="https://i.ytimg.com/vi/hYCPx9izRWg/maxresdefault.jpg" /></div>)
        
        const answered = myQuestion&&this.isAnswered(Object.keys(authedUser.answers), myQuestion.id);
        const [opvt1, opvt2] = [myQuestion.optionOne.votes.length, myQuestion.optionTwo.votes.length];
        if(answered){
                // const {authedUser, myQuestion} = this.props;
                // todo : create a componenet for this pull , and pass the props depending on if it's answered 
                return(
                    <div className="pull">
                        <h2>Asked by {author.name}</h2>
                        <div>
                        <img src={author.avatarURL} />
                        <div>
                            <h1>Results</h1>
                            <div className={this.isOp1(myQuestion.optionOne.votes, authedUser.id)?"marked":""}>
                                would you rather {myQuestion.optionOne.text}
                                <div>{opvt1} votes</div>
                                <div>{(100 * opvt1/(opvt1+opvt2)).toFixed(2)}%</div>
                            </div>
                            <div className={this.isOp1(myQuestion.optionTwo.votes, authedUser.id)?"marked":""}>
                                would you rather {myQuestion.optionTwo.text}
                                <div>{opvt2} votes</div>
                                <div>{(100 * opvt2/(opvt1+opvt2)).toFixed(2)}%</div>
                            </div>
                        </div>
                        </div>
                    </div>
                )
            }
            else{
        return(
            <div className="pull">
                <h2>Asked by {author.name}</h2>
                <img src={author.avatarURL} />
                <div value={this.state.answer} onChange={this.handleRadioChange}>
                    <h1>answer</h1>
                    <div>
                        would you rather {myQuestion.optionOne.text} <input type="radio" value="optionOne" name="answer" />
                    </div>
                    <div>
                        would you rather {myQuestion.optionTwo.text} <input type="radio" value="optionTwo" name="answer" />
                    </div>
                    <button onClick={this.handleSubmit}>submit</button>
                </div>
            </div>
        )}
    }
}

function mapStateToProps({question,login, user}, props){
    const myQuestion = question[props.match.params.question_id];
    const authedUser = login;
    const author = !!myQuestion&&user[myQuestion.author]
    return{
        myQuestion,
        authedUser,
        author,
    }
}

export default withRouter(connect(mapStateToProps)(Pull));