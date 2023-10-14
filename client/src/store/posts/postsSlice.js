import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./postsActions";

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        loading: false,
        posts: [],
        onePosts: null
    },
    reducers: {
        clearOnePostState: (state)=>{
            state.onePosts = null;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getPosts.pending, (state)=>{
            state.loading = true;
        })
        .addCase(getPosts.fulfilled, (state, action)=>{
            state.loading = false;
            state.posts = action.payload.data;
        })
        .addCase(getPosts.rejected, (state)=>{
            state.loading = false;
        })
    }
})


export const {clearOnePostState} = postsSlice.actions;
export default postsSlice.reducer;