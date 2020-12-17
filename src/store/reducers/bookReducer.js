import {GET_BOOKS, GET_NEW_BOOKS, GET_POPULAR_BOOKS, GET_EXCLUSIVE_BOOKS, GET_BOOK, SEARCH} from "../actions/types";

const initialState = {
    books: [],
    book: [],
    exclusive: [],
    popular: [],
    newb: [],
}

export default function (state=initialState, action){
    switch(action.type){
        case GET_BOOKS:
            return {
                ...state,
                books: action.payload
            }
        case GET_BOOK:
            return {
                ...state,
                book: action.payload
            }
        case GET_EXCLUSIVE_BOOKS:
            return {
                ...state,
                exclusive: action.payload
            }
        case GET_POPULAR_BOOKS:
            return {
                ...state,
                popular: action.payload
            }
        case GET_NEW_BOOKS:
            return {
                ...state,
                newb: action.payload
            }

        case SEARCH:
            return {
                ...state,
                books: action.payload
            }
        default:
            return state;
    }
}