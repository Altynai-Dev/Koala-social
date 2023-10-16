import { createSlice } from "@reduxjs/toolkit";
import { getComments } from "./commentsActions";

const commentsSlice = createSlice({
    name: "comments",
    initialState:{
        comments: [],
        loading: false
    },
    reducers:{

    },
    extraReducers: (builder)=>{
        builder
        .addCase(getComments.pending, (state)=>{
            state.loading = true;
        })
        .addCase(getComments.fulfilled, (state, action)=>{
            state.loading = false;
            state.comments = action.payload.data;
        })
        .addCase(getComments.rejected, (state)=>{
            state.loading = false;
        })
    }
});

export default commentsSlice.reducer;