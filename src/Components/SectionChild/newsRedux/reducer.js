import {NEWS_REQUEST,NEWS_SUCCESS,NEWS_FAILURE} from './actionTypes'

export const initstate = {
    newsData:[],
    isLoading: false,
    isError: false
}

const Newsreducer = (state = initstate, action) => {
    switch (action.type) {
        case NEWS_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case NEWS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                newsData:action.newsData
                
            }
        case NEWS_FAILURE:
            return {
                ...state,
                isError: true,
                isLoading: false,

            }
        default:
            return state
    }
}

export default Newsreducer