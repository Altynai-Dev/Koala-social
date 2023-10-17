import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import {GAMES_API} from "../../helpers/consts";
import { getAuthUser, getTotalPages } from "../../helpers/functions";

export const getGames = createAsyncThunk(
    'games/getGames',
    async (_, { getState }) => {
        const { currentPage, currentCategory, search } = getState().games;
        const categoryAndSearchParams = `q=${search}${currentCategory && `&type=${currentCategory}`}`;
        const pagesLimitParams = `?_page=${currentPage}&_limit=12`;
        const totalPages = await getTotalPages(`${GAMES_API}?${categoryAndSearchParams}`);
        const { data } = await axios.get(`${GAMES_API}${pagesLimitParams}&${categoryAndSearchParams}`);
        return { data, totalPages };
    }
);

export const getOneGame = createAsyncThunk(
    'games/getOneGame',
    async ({ id }) => {
        const { data } = await axios.get(`${GAMES_API}/${id}`);
        return data;
    }
);

export const createGame = createAsyncThunk(
    'games/createGame',
    async ({ game }, { dispatch }) => {
        await axios.post(GAMES_API, game);
        dispatch(getGames());
    }
);

export const editGame = createAsyncThunk(
    'games/editGame',
    async ({ game }, { dispatch }) => {
        await axios.patch(`${GAMES_API}/${game.id}`, game);
        dispatch(getGames());
    }
);

export const deleteGame = createAsyncThunk(
    'games/deleteGame',
    async ({ id }, { dispatch }) => {
        await axios.delete(`${GAMES_API}/${id}`);
        dispatch(getGames());
    }
);
export const getCategories = createAsyncThunk(
    'games/getCategories',
    async () => {
        const { data } = await axios.get(GAMES_API);
        const uniqueCategories = new Set(data.map(product => product.type));
        const categories = [];
        for(let i of uniqueCategories) {
            categories.push(i);
        };
        return categories;
    }
);

export const toggleGameLike = createAsyncThunk(
    'games/toggleGameLike',
    async ({ setIsLike, likes, gameId }, { dispatch }) => {
        const user = getAuthUser();
        
        let updatedLikesArr;
        
        if(!likes) {
            updatedLikesArr = [];
        } else {
            updatedLikesArr = [ ...likes ];
        };

        if(setIsLike) {
            updatedLikesArr.push({
                id: Date.now(),
                user
            });
        } else {
            updatedLikesArr = updatedLikesArr.filter(like => like.user.username !== user.username);
        };

        await axios.patch(`${GAMES_API}/${gameId}`, { likes: updatedLikesArr });

        dispatch(getGames());
    }
);