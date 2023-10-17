import { createSlice } from "@reduxjs/toolkit";
import { getCategories, getFavorites, getGames, getOneGame } from "./gamesActions";

const gamesSlice = createSlice({
    name: "games",
    initialState: {
        loading: false,
        games: [],
        oneGame: null,
        currentPage: 1,
        totalPages: 1,
        currentCategory: '',
        search: '',
        categories: [],
        favorites:[]
    },
    reducers: {
        clearOneGameState: (state)=>{
            state.oneGame = null;
        },
        changePage: (state, action) => {
            state.currentPage = action.payload.page;
        },
        changeCategory: (state, action) => {
            if(action.payload.category === 'all') {
                state.currentCategory = '';
            } else {
                state.currentCategory = action.payload.category;
            };
            state.currentPage = 1;
        },
        setSearchVal: (state, action) => {
            state.search = action.payload.search;
            state.currentPage = 1;
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
            state.totalPages = action.payload.totalPages;
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
        .addCase(getCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
        }).addCase(getFavorites.fulfilled, (state,action ) => {
            state.favorites = action.payload
        })
    }
})
export const {
    clearOneGameState, 
    changePage, 
    setSearchVal, 
    changeCategory} = gamesSlice.actions;
export default gamesSlice.reducer;