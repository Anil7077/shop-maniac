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
        },
        increaseQty: (state, action) => {
            const itemId = action.payload;
            state.myCart = state.myCart.map(item => {
                if (item?.id === itemId) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    };
                }
                return item;
            });
        },
        decreaseQty: (state, action) => {
            const itemId = action.payload;
            state.myCart = state.myCart.map(item => {
                if (item?.id === itemId && item.quantity > 1) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    };
                
                }
                return item;
            });
        },

    }
})

export const { addToCart, removeCartItem, removeAll, increaseQty,decreaseQty } = newCartSlice.actions;

export default newCartSlice.reducer