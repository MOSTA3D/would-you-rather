import { ADD_QUESTION, ANSWER_QUESTION, RECIEVE_QUESTIONS } from "../actions/question";

export default function question(state={}, action){
    switch(action.type){
        case RECIEVE_QUESTIONS:
            return action.questions
        case ADD_QUESTION:
            const {question} = action;
            return {
                ...state,
                [question.id]:question
            }
        case ANSWER_QUESTION:
            const {answer, qid, authedUser} = action.answer;
            return{
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]:{
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat([authedUser])
                    }
                }
            }
        default:
            return state
    }
}