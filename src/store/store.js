import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../slice/StudentSlice";
import resultReducer from "../slice/ResultSlice";

export const store = configureStore({
  reducer: {
    students: studentReducer,
    results: resultReducer,
  },
});
