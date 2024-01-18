import {createAsyncThunk, createSlice, createReducer } from "@reduxjs/toolkit";


// const initialState = {
//   user: []
// }

// export const login = createSlice(name: 'counter',
// initialState,
// reducers: {
//   increment(state) {
//     state.value++
//   },)

export const userReducer = createReducer(
  { user: null },
  (builder) => {
    builder
      .addCase("LogIn", (state, action) => {
        state.user = action.payload;
      })
      .addCase("SignUp", (state, action) => {
        state.user = action.payload;
      })
      .addCase("SignOut", (state, action) => {
        state.user = null;
      });
  }
);

// Assuming LogIn, SignUp, and SignOut are action types, you need to define them.
// For example:
const LogIn = "LogIn";
const SignUp = "SignUp";
const SignOut = "SignOut";
