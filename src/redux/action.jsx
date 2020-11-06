import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE,WRONG_CREDENTIALS} from "./actionTypes"
import axios from 'axios'

export const loginRequest = (payload) => ({
    type:LOGIN_REQUEST,
    payload
})

export const loginSuccess = (payload) => ({
    type:LOGIN_SUCCESS,
    payload
})

export const WrongCredentials = (payload) => ({
    type:WRONG_CREDENTIALS,
    payload
})

export const loginfailure = (payload) => ({
    type:LOGIN_FAILURE,
    payload
})

export const getUserData = (payload) => dispatch => {
    // console.log(payload);
    dispatch(loginRequest())
    return axios.get("http://localhost:3000/users")
    .then(res=> {
        res.data.filter((item)=> {
            if(item.username == payload.username && item.password==payload.password){
                return (dispatch(loginSuccess(item)))
            } 
        })
    })
    .catch(err=>dispatch(loginfailure(err)))
}