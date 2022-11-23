import { createSlice } from '@reduxjs/toolkit'

export const brandSlice = createSlice({
    name: 'counter',
    initialState:{
        selectedCategory: "blush"
    },
    reducers: {
        filterCategory:(state, action) =>{
         
            state.selectedCategory= action.payload;
        } 
    }
})

export const {filterCategory} = brandSlice.actions;
export const getSelectedCategory= state =>state.counter.selectedCategory;
export default brandSlice.reducer