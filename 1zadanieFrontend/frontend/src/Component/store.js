import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./Reducer";

export const store = configureStore({
    reducer: todoSlice,
  });
  