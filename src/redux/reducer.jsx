import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE ,WRONG_CREDENTIALS} from "./actionTypes"

export const initstate = {
    isAuth: false,
    isLoading: false,
    isError: false,
    username: "",
    avatar_url: "",
    username_fullname: "",
    user_id: "",
    description:"",
    WrongCredentials:true
}

const reducer = (state = initstate, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isAuth: false,
                isError: false,
                WrongCredentials:false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                isError: false,
                WrongCredentials:false,
                user_id: payload.user_id,
                username: payload.username,
                description:payload.description,
                username_fullname: payload.username_fullname,
                avatar_url: payload.avatar_url,
                
            }
            case WRONG_CREDENTIALS:
                return {
                    ...state,
                    isLoading: false,
                    isAuth: false,
                    isError: true,
                    WrongCredentials:true,
                }
        case LOGIN_FAILURE:
            return {
                ...state,
                isError: true,
                isLoading: false,
                isAuth: false,
                WrongCredentials:true

            }
        default:
            return state
    }
}

export default reducer