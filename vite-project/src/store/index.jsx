import { configureStore, createSlice } from '@reduxjs/toolkit'
import {uiSlice} from './UI'

const initialCartState = { cartcount: 0, item_count: 0 }

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addtocart(state) {
            state.cartcount++;
        },
        removefromcart(state) {
            state.cartcount--;
        },
        add_item_to_cart(state) {
            state.item_count++;
        },
        remove_item_to_cart(state) {
            state.item_count--;
        }
    }
})
const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        ui: uiSlice.reducer
    },
})


export const cartActions = cartSlice.actions;
export default store;
