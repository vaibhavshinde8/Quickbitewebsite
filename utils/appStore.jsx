import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cardSlice'; // Correct relative path if cardSlice.js is in utils folder
// Use correct path if cardSlice is in utils
 // Use the correct relative path
 // Correct path

const appStore = configureStore({
    reducer: {
        cart: cartReducer
    },
});

export default appStore;
