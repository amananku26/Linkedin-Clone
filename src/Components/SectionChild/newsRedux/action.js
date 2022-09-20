import {NEWS_REQUEST,NEWS_SUCCESS,NEWS_FAILURE} from './actionTypes'

import axios from 'axios'

export const newsRequest = () => ({
    type:NEWS_REQUEST
})

export const newsSuccess = (data) => ({
    type:NEWS_SUCCESS,
    newsData:data
})

export const newsfailure = (error) => ({
    type:NEWS_FAILURE,
    error:error

})

export const getNewsData = () => {
    return (dispatch) => {
      dispatch(newsRequest());
      return axios
        .get("https://linkedinclone-redux.herokuapp.com/news")
        .then((res) => {
          console.log("response success", res.data);
          return dispatch(newsSuccess(res.data));
        })
        .catch((err) => dispatch(newsfailure(err)));
    };
  };
// console.log(newsSuccess());