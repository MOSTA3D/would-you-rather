import { ANSWER_QUESTION } from "../actions/question";
import { RECIEVE_USERS } from "../actions/user";

export default function user(state={}, action){
    console.log(action);
    switch(action.type){
        case RECIEVE_USERS:
            const {users} = action;
            return { ...state,...users}
        case ANSWER_QUESTION:
            const { authedUser, answer, qid } = action.answer;
            return {
                ...state,
                [authedUser]:{
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                    }
                }

            }
        default:
            return state
    }
}