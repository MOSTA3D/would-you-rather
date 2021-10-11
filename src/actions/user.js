import { _getUsers } from "../utils/_DATA";
export const RECIEVE_USERS = "RECIEVE_USERS";

function recieveUsers(users){
    return {
        type:RECIEVE_USERS,
        users,
    }
}

export function handleRecieveUsers(){
    return (dispatch)=>{
        _getUsers().then(users=>dispatch(recieveUsers(users)))
    }
}