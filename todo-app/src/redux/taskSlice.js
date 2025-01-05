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

    editTask: (state, action) => {
      // console.log(action.payload);
      const { taskId, taskName } = action.payload;
      const taskToEdit = state.find((task) => task.id === taskId);
      console.log(taskToEdit);
      if (taskToEdit) {
        taskToEdit.taskName = taskName;
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;

export default taskSlice.reducer;
