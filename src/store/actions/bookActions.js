import {GET_BOOKS, GET_BOOK, GET_EXCLUSIVE_BOOKS, GET_NEW_BOOKS, GET_POPULAR_BOOKS, IP} from "./types";
import axios from "axios";

export const getBooks = () => dispatch => {
    axios.get("/api/v1/books/all")
        .then(res => {
            console.log(res.data);
            dispatch({
                type: GET_BOOKS,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const getBook = (id) => dispatch => {
    axios.get("/api/v1/books/one/" + id)
        .then(res => {
            console.log(res.data);
            dispatch({
                type: GET_BOOK,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const getExclusive = () => dispatch => {
    axios.get("/api/v1/books/exclusive")
        .then(res => {
            console.log(res.data);
            dispatch({
                type: GET_EXCLUSIVE_BOOKS,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const getPopular = () => dispatch => {
    axios.get("/api/v1/books/popular")
        .then(res => {
            console.log(res.data);
            dispatch({
                type: GET_POPULAR_BOOKS,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const getNew = () => dispatch => {
    axios.get("/api/v1/books/new")
        .then(res => {
            console.log(res.data);
            dispatch({
                type: GET_NEW_BOOKS,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}