//import { showLoading, hideLoading } from "react-redux-loading";

import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";

export const RECIEVE_QUESTIONS = "RECIEVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

function recieveQuestions(questions){
    return {
        type: RECIEVE_QUESTIONS,
        questions,
    }
}
export function handleRecieveQuestions(){
    return (dispatch)=>{
        _getQuestions()
        .then(questions=>dispatch(recieveQuestions(questions)))
    }
}

function addQuestion(question){
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function handleAddQuestion(optionOneText, optionTwoText){
    return function(dispatch, getState){
        const author = getState().login.id;
        const question = {optionOneText, optionTwoText, author};
        // dispatch(showLoading());
        // dispatch(addQuestion(question));
        return (
            _saveQuestion(question)
            .then((question)=>dispatch(addQuestion(question)))
        )
    }
}

function answerQuestion(answer){
    return {
        type: ANSWER_QUESTION,
        answer,
    }
}

export function handleAnswerQuestion(qid, answer){
    return(dispatch, getState)=>{
        const authedUser = getState().login.id;
        const info = {authedUser, qid, answer};
        dispatch(answerQuestion(info))
        return(
            _saveQuestionAnswer(info).then(()=>console.log("ok every thing is fine"))
        )
    }
}

// todo: remove answer for network error issues