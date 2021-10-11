import { LOGIN } from "../actions/authed";
import { ANSWER_QUESTION } from "../actions/question";

export default function login(state=null, action){
    switch(action.type){
        case LOGIN:
            return action.user;
        case ANSWER_QUESTION:
            return {
                ...state,
                answers: {
                    ...state.answers,
                    [action.answer.qid]: action.answer,
                }
            }
        default:
            return state;
    }
}