import { configureStore } from "@reduxjs/toolkit";
import compilerSlice from "./slices/compilerSlice";
const store = configureStore({
  reducer: {
    compilerSlice: compilerSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
