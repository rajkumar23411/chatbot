import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./reducers/studentReducer";

const store = configureStore({
    reducer: {
        student: studentReducer,
    },
});

export default store;
