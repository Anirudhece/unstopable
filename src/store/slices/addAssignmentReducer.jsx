import { createSlice } from "@reduxjs/toolkit";
import {intitalState} from "./constant";
const addAssignment = createSlice({
  name: "addAssignment",
  initialState: {
    assignments: [],
    isOpen:false,
    assignmentCount: 0,
  },
  reducers: {
    modalReducer: (state, action) => {
      state.isOpen = action.payload.isOpen;
    },
  },
});
export const {modalReducer} = addAssignment.actions;
export default addAssignment.reducer;