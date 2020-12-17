import {DELETE_FROM_CART, GET_CART} from "../actions/types";

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
                cartItems: action.payload
            }

        case DELETE_FROM_CART:
            return {
                ...state,
                cartItems: [
                    ...state.cartItems.slice(0, action.payload),
                    ...state.cartItems.slice(action.payload + 1)
                ],
            }
        default:
            return state
    }
};

