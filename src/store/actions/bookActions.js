import {GET_BOOKS, GET_BOOK, GET_EXCLUSIVE_BOOKS, GET_NEW_BOOKS, GET_POPULAR_BOOKS, IP, SEARCH} from "./types";
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

export const search = (data) => dispatch => {
    console.log(data)
    axios.get("/api/v1/books/search", {"search": "asd"}, {
        headers: {
            "Content-type": 'application/json'
        }
    })
        .then(res => {
            console.log(res.data);
            dispatch({
                type: SEARCH,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const saveComment = (formData) => dispatch => {
    console.log(formData)
    const fm = new FormData()
    Object.keys(formData).map(key => {
        fm.append([key],formData[key])
    })

    console.log(axios.defaults.headers.common["Authorization"])

    axios.post("/api/v1/comments/create", fm, {
        headers: {
            "Content-type": 'application/json'
        }
    })
        .then(res => {
            console.log(res.data);
        })
        .catch(err => console.log(err))
}



