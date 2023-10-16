import { createSlice } from "@reduxjs/toolkit";
import { getGames, getOneGame } from "./gamesActions";

const gamesSlice = createSlice({
    name: "games",
    initialState: {
        loading: false,
        games: [],
        oneGame: null
    },
    reducers: {
        clearOneGameState: (state)=>{
            state.oneGame = null;
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(getGames.pending, (state)=>{
            state.loading = true;
        })
        .addCase(getGames.fulfilled, (state, action)=>{
            state.loading = false;
            state.games = action.payload.data;
        })
        .addCase(getGames.rejected, (state)=>{
            state.loading = false;
        })
        .addCase(getOneGame.pending, (state)=>{
            state.loading = true
        })
        .addCase(getOneGame.fulfilled, (state, action)=>{
            state.loading = false;
            state.oneGame = action.payload;
        })
        .addCase(getOneGame.rejected, (state)=>{
            state.loading = false;
        })
    }
})
export const {clearOneGameState} = gamesSlice.actions;
export default gamesSlice.reducer;