//universal file to use it in every pages and components
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";


export default configureStore({
    reducer:{
        cart:cartReducer,
        user:userReducer
        
    },
    
})




  