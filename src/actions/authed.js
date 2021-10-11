export const LOGIN = "LOGIN";

export default function login(user){
    return {
        type:LOGIN,
        user,
    }
}