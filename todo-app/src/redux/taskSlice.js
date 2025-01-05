import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "Todos",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },

    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
