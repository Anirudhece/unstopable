import { createSlice } from "@reduxjs/toolkit";
import { intitalState } from "./constant";
const addAssignment = createSlice({
  name: "addAssignment",
  initialState: {
    assignments: [
      {
        id: "",
        assignmentName: "",
        purpose: "",
        description: "",
        skills: [ ],
        duration: "",
      },
    ],
    isOpen: false,
    assignmentCount: 0,
  },
  reducers: {
    modalReducer: (state, action) => {
      state.isOpen = action.payload.isOpen;
    },

    editFieldReducer: (state, action) => {
      const { name, value } = action.payload;
      state.assignments[state.assignmentCount][name] = value;
    },

  },
});
export const { modalReducer,editFieldReducer } = addAssignment.actions;
export default addAssignment.reducer;