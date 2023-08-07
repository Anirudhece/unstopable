import { createSlice } from "@reduxjs/toolkit";
// import { intitalState } from "./constant";

const removeElementAtIndex = (array, index) => {
  if (index >= 0 && index < array.length) {
    const newArray = [...array];
    newArray.splice(index, 1);
    return newArray;
  }
  return array;
};

const addAssignment = createSlice({
  name: "addAssignment",
  initialState: {
    assignments: [
      {
        id: "",
        assignmentName: "",
        purpose: "",
        description: "",
        skills: [],
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

    addSkillReducer: (state, action) => {
      const { value } = action.payload;
      state.assignments[state.assignmentCount].skills.push(value);
    },

    removeSkillReducer: (state, action) => {
      const { index } = action.payload;
      state.assignments[state.assignmentCount].skills = removeElementAtIndex(
        state.assignments[state.assignmentCount].skills,
        index
      );
    },

  },
});
export const { modalReducer, editFieldReducer, addSkillReducer,removeSkillReducer } =
  addAssignment.actions;
export default addAssignment.reducer;
