import axios from "axios";
import {SIGN_IN, SIGN_OUT, SIGN_UP} from "./types";

export const signUp = (user) => dispatch =>{
    axios.post('/api/v1/register', user)
        .then(res => {
            console.log("Response: ", res.data)
            dispatch({
                type: SIGN_UP,
            })

            setTimeout(() => {
                dispatch({
                    type: SIGN_UP,
                })
            }, 1000)

        })
        .catch(err => console.log(err))
};


export const logIn = (user) => dispatch =>{
    axios.post('/api/v1/login', user)
        .then(res => {
            console.log("here!", res.data.accessToken)
            localStorage.setItem('access_token', res.data.accessToken)
            dispatch({
                type: SIGN_IN,
                payload: res.data.accessToken
            })
        })
        .catch((err) => console.log(err))
};

export const logOut = () => dispatch =>{
    axios.post('/api/v1/logout')
        .then(res => {
            dispatch({
                type: SIGN_OUT
            })
        })
        .catch((err) => console.log(err))

};