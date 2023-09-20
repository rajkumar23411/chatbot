// studentSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    studentInfo: {}, // This will hold the list of student data
};

const studentSlice = createSlice({
    name: "studentInfo",
    initialState,
    reducers: {
        addStudentInfo: (state, action) => {
            state.studentInfo = {
                ...state.studentInfo,
                ...action.payload,
            }; // Add a new student to the list
        },
    },
});

export const { addStudentInfo } = studentSlice.actions;
export default studentSlice.reducer;
