import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import {GAMES_API} from "../../helpers/consts";

export const getGames = createAsyncThunk(
    'games/getGames',
    async () => {
        // const { currentPage, currentCategory, search } = getState().products;
        // const categoryAndSearchParams = `q=${search}${currentCategory && `&type=${currentCategory}`}`;
        // const pagesLimitParams = `?_page=${currentPage}&_limit=12`;
        // const totalPages = await getTotalPages(`${PRODUCTS_API}?${categoryAndSearchParams}`);
        const { data } = await axios.get(`${GAMES_API}`);
        return { data };
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