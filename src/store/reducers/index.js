import {combineReducers} from 'redux'
import bookReducer from "./bookReducer";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";


export default combineReducers({
    bookReducer:bookReducer,
    authReducer:authReducer,
    cartReducer:cartReducer,
})