import { configureStore } from "@reduxjs/toolkit";
import addAssignmentReducer from "./slices/addAssignmentReducer";
const Store = configureStore({
    reducers:{
        addAssignment:addAssignmentReducer,
    }
})
export default Store;