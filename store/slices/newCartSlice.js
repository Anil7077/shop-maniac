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
        }
    }
})

export const {addToCart, removeCartItem} = newCartSlice.actions;

export default newCartSlice.reducer