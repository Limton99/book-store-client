import {
    ADD_TO_CART,
    DELETE_FROM_CART,
    GET_CART
} from "./types";
import axios from "axios";

export const getCart = () => dispatch => {
    axios.get("/api/v1/cart/show")
        .then(res => {
            console.log(res.data);
            dispatch({
                type: GET_CART,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const addToCart = (id) => dispatch => {
    axios.post("/api/v1/cart/addToCart/" + id)
        .then(res => {
            console.log(res.data);
            dispatch({
                type: ADD_TO_CART,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const deleteFromCart = (id) => dispatch => {
    axios.get("/api/v1/cart/delete/" + id)
        .then(res => {
            dispatch({
                type: DELETE_FROM_CART,
                payload: id
            })
        })
        .catch(err => console.log(err))
}



