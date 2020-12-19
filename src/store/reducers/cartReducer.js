import {ADD_TO_CART, DELETE_FROM_CART, DELETE_ONE_FROM_CART, GET_CART} from "../actions/types";
import bookReducer from "./bookReducer";

const initialState = {
    cartItems: [],
    orderTotal: 0,
}

export default function (state=initialState, action) {
    console.log(action.payload)

    switch (action.type) {
        case GET_CART:
            return {
                ...state,
                cartItems: action.payload.cart,
                orderTotal: action.payload.total,
            }

        case ADD_TO_CART:
            const cartBook = state.cartItems.find(cart=>cart.book_id === action.payload.id)
            return {
                ...state,
                cartItems: increase(state.cartItems, cartBook.id, action.payload.price),
                orderTotal: parseInt(state.orderTotal)+parseInt(action.payload.price),
            }

        case DELETE_ONE_FROM_CART:
            const bookToDecrease = state.cartItems.find(cart=>cart.id === action.payload)
            const bookPrice = bookToDecrease.bookPrice/bookToDecrease.bookCount
            return {
                ...state,
                cartItems: removeOneById(state.cartItems, action.payload, bookPrice),
                orderTotal: state.orderTotal-bookPrice
            }

        case DELETE_FROM_CART:
            console.log(action.payload)
            const book = state.cartItems.find(cart=>cart.id === action.payload)
            return {
                ...state,
                cartItems: removeById(state.cartItems, action.payload),
                orderTotal: state.orderTotal-book.bookPrice
            }
        default:
            return state
    }
};

function increase(list, id, price) {
    console.log(id)
    for(let i = list.length - 1; i >= 0; i--) {
        if(list[i].id === id) {
            list[i].bookCount++
            list[i].bookPrice=parseInt(list[i].bookPrice)+parseInt(price)
            break
        }
    }
    return [...list]
}

function removeById(list, id) {
    console.log(id)
    for(let i = list.length - 1; i >= 0; i--) {
        if(list[i].id === id) {
            list.splice(i, 1)
            break
        }
    }
    return [...list]
}

function removeOneById(list, id, price) {
    console.log(list)
    for(let i = list.length - 1; i >= 0; i--) {
        if(list[i].id === id) {
            list[i].bookCount--
            list[i].bookPrice=parseInt(list[i].bookPrice)-parseInt(price)
            break
        }
    }
    return [...list]
}

