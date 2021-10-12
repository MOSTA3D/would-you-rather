import { ADD_QUESTION, ANSWER_QUESTION } from "../actions/question";
import { RECIEVE_USERS } from "../actions/user";

export default function user(state={}, action){
    console.log(action);
    switch(action.type){
        case RECIEVE_USERS:
            const {users} = action;
            return { ...state,...users}
        case ADD_QUESTION:
            const {author, id} = action.question
            return {
                ...state,
                [author]:{
                    ...state[author],
                    questions: state[author].questions.concat([id])
                }
            }
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