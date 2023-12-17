import { configureStore } from "@reduxjs/toolkit";
import exerciseReducer from "./ExerciseSlice"

const appStore=configureStore({
    reducer:{
        exercise:exerciseReducer
    }
})

export default appStore;