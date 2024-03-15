import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    myUsers: [],
  };

export const newUserSlice = createSlice({
    name: 'newuser',
    initialState,
    reducers: {
        addUsers: (state, action) => {
            state.myUsers.push(action.payload); // Directly push the user object into the array
        }
    }
})

export const {addUsers} = newUserSlice.actions;

export default newUserSlice.reducer