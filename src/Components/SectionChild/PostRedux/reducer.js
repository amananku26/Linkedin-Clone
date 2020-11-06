import {
    LINKEDIN_POST_GET_REQUEST,
    LINKEDIN_POST_GET_SUCCESS,
    LINKEDIN_POST_GET_FAILURE,
    UPLOADING_POST_REQUEST,
    UPLOADING_POST_SUCCESS,
    UPLOADING_POST_FAILURE,
    MAKE_LIKE_REQUEST,
    MAKE_LIKE_SUCCESS,
    MAKE_LIKE_FAILURE,
    POST_COMMENT_REQUEST,
    POST_COMMENT_SUCCESS,
    POST_COMMENT_FAILURE
} from './actionTypes'

export const initstate = {
    PostData: [],
    isLoading: false,
    isError: false,
    likeStaus: false,
    totalLikes: ""
}

const Postreducer = (state = initstate, action) => {
    switch (action.type) {
        // GETTING THE DATA FROM THE http://localhost:3000/posts
        case LINKEDIN_POST_GET_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case LINKEDIN_POST_GET_SUCCESS:
            // var NewData = [...action.PostData]
            return {
                ...state,
                isLoading: false,
                PostData: action.PostData,
                likeStaus: false

            }
        case LINKEDIN_POST_GET_FAILURE:
            return {
                ...state,
                isError: true,
                isLoading: false,

            }
        // UPLOADING THE POST ON http://localhost:3000/posts
        case UPLOADING_POST_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case UPLOADING_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,

            }
        case UPLOADING_POST_FAILURE:
            return {
                ...state,
                isError: true,
                isLoading: false,

            }
        // make like
        case MAKE_LIKE_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case MAKE_LIKE_SUCCESS:
            return {
                ...state,
                isError: true,
                likesData: action.action,
                isLoading: false,
                likeStaus: true

            }
        case MAKE_LIKE_FAILURE:
            return {
                ...state,
                isError: true,
                isLoading: false,

            }

        // make comment
        case POST_COMMENT_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case POST_COMMENT_SUCCESS:
            return {
                ...state,
                isError: true,
                isLoading: false,
                likeStaus: true

            }
        case POST_COMMENT_FAILURE:
            return {
                ...state,
                isError: true,
                isLoading: false,

            }


        default:
            return state
    }
}

export default Postreducer