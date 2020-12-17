import {SIGN_IN, SIGN_OUT, SIGN_UP} from "../actions/types";
import jwt_decode from 'jwt-decode'
import axios from "axios";


const initialState = {
    isAuth: false,
    currentUserId: null,
    signUpSuccess: false
}



export default function (state=initialState, action){
    if (localStorage.getItem('access_token')) {
        state = {
            isAuth: true,
            currentUserId: localStorage.getItem('access_token'),
            signUpSuccess: false
        }

        axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem('access_token')}`
    }

    console.log(action)
    switch(action.type){
        case SIGN_UP:
            return {
                ...state,
                signUpSuccess: !state.signUpSuccess
            }
        case SIGN_IN:
            const payload = jwt_decode(action.payload)
            console.log(payload)
            if(payload.exp < new Date().getTime() / 1000) {
                return {
                    ...state,
                    isAuth: false,
                    currentUserId: null
                }
            }
            axios.defaults.headers.common["Authorization"] = `Bearer ${action.payload}`
            return {
                ...state,
                isAuth: true,
                currentUserId: payload
            }
        case SIGN_OUT:
            localStorage.removeItem('access_token')
            delete axios.defaults.headers.common["Authorization"]
            return {
                ...state,
                isAuth: false,
                currentUserId: null
            }
        default:
            return state;
    }
}