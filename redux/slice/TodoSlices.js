import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
	name: "todo",
	initialState: {
		value: [],
	},
	reducers: {
		AddTodo: (state, action) => {
			state.value.push({
				id: Date.now(),
				task: action.payload,
				completed: false,
			});
		},
		RemoveTodo: (state, action) => {
			state.value = state.value.filter(
				(todo) => todo.id !== action.payload
			);
		},
		EditTodo: (state, action) => {
			const { index, task } = action.payload;
			const todo = state.value.find((item) => item.id === index);
			if (todo) {
				todo.task = task;
			}
		},
		completeTodo: (state, action) => {
			const todo = state.value.find((todo) => todo.id === action.payload);
			if (todo) {
				todo.completed = !todo.completed;
			}
		},
	},
});

export const { AddTodo, RemoveTodo, EditTodo, completeTodo } =
	todoSlice.actions;
export default todoSlice.reducer;
