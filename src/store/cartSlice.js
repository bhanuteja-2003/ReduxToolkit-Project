import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name:"cart", 
    initialState :[],
    reducers:{
        Add(state, action){
            state.push(action.payload);
        } ,
        Delete(state, action){
            return state = state.filter((item)=>{
                return item.id!==action.payload.id;
            })
        }
    }
});
export const {Add, Delete} = cartSlice.actions;
export default cartSlice.reducer;