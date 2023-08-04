import { configureStore } from "@reduxjs/toolkit";
import addAssignmentReducer from "./slices/addAssignmentReducer";
const Store = configureStore({
  reducer: {
    AddAssignment: addAssignmentReducer,
  },
});
export default Store;
