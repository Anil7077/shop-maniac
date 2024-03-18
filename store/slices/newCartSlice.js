import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    myCart: [],
  };

export const newCartSlice = createSlice({
    name: 'newcart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.myCart.push(action.payload);
        },
        removeCartItem: (state, action) => {
            const itemId = action.payload;
            state.myCart = state.myCart.filter(item => item.id !== itemId);
        },
        removeAll: (state, action) => {
            state.myCart = []
        }
    }
})

export const {addToCart, removeCartItem, removeAll} = newCartSlice.actions;

export default newCartSlice.reducer