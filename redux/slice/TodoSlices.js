 import { createSlice } from "@reduxjs/toolkit";

export const todoSlice=createSlice({
    name:'todo',
    initialState:{
        value:[]
    },
    reducers:{
        AddTodo:(state,action)=>{
            state.value.push(action.payload)
           // debugger
        },
        RemoveTodo:(state,action)=>{
            state.value.splice(action.payload,1)
        },
        EditTodo:(state,action)=>{
            state.value.splice(action.payload['index'],1,action.payload['task'])
        },
        completeTodo:(state, action) => {
            const todo = state.value.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = true;
            }
        }
    }
 })

 export const{AddTodo,RemoveTodo,EditTodo,completeTodo}=todoSlice.actions
 export default todoSlice.reducer;
