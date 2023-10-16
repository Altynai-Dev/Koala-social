import { configureStore } from "@reduxjs/toolkit";
import accountReducer from './account/accountSlice';
import postsReducer from './posts/postsSlice';
import commentsReducer from './comments/commentsSlice';
import likesReducer from './likes/likesSlice';
import gamesReducer from './games/gamesSlice';
export default configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }),
    reducer: {
        account: accountReducer,
        posts: postsReducer,
        comments: commentsReducer,
        likes: likesReducer,
        games: gamesReducer
    }
});