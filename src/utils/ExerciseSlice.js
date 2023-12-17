import { createSlice } from "@reduxjs/toolkit";
import {ExerciseOption} from '../utils/ExerciseOptions'

export const fetchExercise = (url) => async (dispatch) => {
    try{
        const response = await fetch(url, ExerciseOption);
        const json = await response.json();
        dispatch(addExercise(json));
    }
    catch(error)
    {
        throw error;
    }
}

export const fetchBody = (url) => async (dispatch) => {
    try{
        const response = await fetch(url, ExerciseOption);
        const json = await response.json();
        dispatch(addBodyPart(json));
    }
    catch(error)
    {
        throw error;
    }
}

export const fetchExerciseDetail = (url) => async (dispatch) => {
    try{
        const response = await fetch(url, ExerciseOption);
        const json = await response.json();
        console.log(json);
        dispatch(addDetailExercise(json));
    }
    catch(error)
    {
        throw error;
    }
}

const ExerciseSlice=createSlice({
    name:'exercise',
    initialState:{
        exerciseItem:[],
        bodyPartItem:[],
        addDetailOfExercise:{}
    },
    reducers:{
        addExercise: (state, action) => {
            return {
              ...state,
              exerciseItem: [...state.exerciseItem, action.payload],
            };
          },
        addBodyPart:(state,action)=>{
            return {
                ...state,
                bodyPartItem: [...state.bodyPartItem, action.payload],
              };
        },
        addDetailExercise:(state,action)=>{
            // console.log(action.payload)
            return {
                ...state,
                addDetailOfExercise: { res : action.payload}
              };
        }
    }
})

export default ExerciseSlice.reducer;
export const {addExercise,addBodyPart,addDetailExercise} = ExerciseSlice.actions;