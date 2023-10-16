import { createSlice } from "@reduxjs/toolkit";
import { getLikes } from "./likesActions";

const likesSlice = createSlice({
    name: 'likes',
    initialState:{
        likes: []
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(getLikes.fulfilled, (state, action)=>{
            console.log(action.payload)
            //state.likes.push(action.payload);
        })
    }
})

export default likesSlice.reducer;