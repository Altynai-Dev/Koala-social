import { createSlice } from "@reduxjs/toolkit";

const likesSlice = createSlice({
  name: "likes",
  initialState: {
    likes: {},
  },
  reducers: {
    toggleLike: (state, action) => {
      const postId = action.payload;
      state.likes[postId] = !state.likes[postId];
    },
  },
});

export const { toggleLike } = likesSlice.actions;
export default likesSlice.reducer;
