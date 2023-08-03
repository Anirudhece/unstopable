import { createSlice } from "@reduxjs/toolkit";
const addAssignment= createSlice({
    name:'addAssignment',
    initialState:{
        assignments:[],
        assignmentCount:0,
    },
    reducers:{
        // add assignemt
        // delete assignment
    }
});
export const{}=addAssignment.actions;
export default addAssignment.reducer;