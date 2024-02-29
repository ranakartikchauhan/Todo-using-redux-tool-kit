import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [
    {
      id: 1,
      description: "example description",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        description: action.payload.description,
      };
      state.todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    updateTodo: (state, action) => {
      const updateTodo = state.todos.find(
        (todo) => todo.id == action.payload.id
      );
      if (updateTodo) {
        updateTodo.description = action.payload.description;
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
