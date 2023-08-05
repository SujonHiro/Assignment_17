import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../slice/TodoSlices"

export default configureStore({
    reducer:{
        todo: TodoReducer
    }
})