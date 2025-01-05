import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";

export const appStore = configureStore({
  reducer: {
    Todos: taskReducer,
  },
});
