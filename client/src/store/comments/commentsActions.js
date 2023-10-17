import { createAsyncThunk } from "@reduxjs/toolkit";
import { GAMES_API } from "../../helpers/consts";
import axios from "axios";
import { getOneGame } from "../games/gamesActions";

export const createComment = createAsyncThunk(
    'comments/createComment',
    async ({ gameObj, commentObj }, { dispatch }) => {
        const updatedProductObj = { ...gameObj };
        const checkCommentKeyInProduct = Object.keys(updatedProductObj).includes('comments');

        if(!checkCommentKeyInProduct) {
            updatedProductObj.comments = [
                commentObj
            ];
        } else {
            updatedProductObj.comments = [
                ...gameObj.comments,
                commentObj
            ];
        };

        await axios.patch(`${GAMES_API}/${updatedProductObj.id}`, updatedProductObj);

        dispatch(getOneGame({ id: updatedProductObj.id }));
    }
);

export const deleteComment = createAsyncThunk(
    'comments/deleteComment',
    async ({ commentId }, { dispatch, getState }) => {
        const { oneGame } = getState().games;
        const updatedProduct = { ...oneGame };
        updatedProduct.comments = updatedProduct.comments.filter(comment => comment.id !== commentId);


        await axios.patch(`${GAMES_API}/${updatedProduct.id}`, updatedProduct);

        dispatch(getOneGame({ id: updatedProduct.id }));
    }
);