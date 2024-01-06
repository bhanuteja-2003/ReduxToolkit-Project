import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
const store = configureStore({
    reducer : {
        cart : cartSlice, 
        //.... can have many slices afterwards
    }
});

export default store;