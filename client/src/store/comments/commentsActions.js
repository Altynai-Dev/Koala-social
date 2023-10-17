import { createAsyncThunk } from "@reduxjs/toolkit";
import { GAMES_API } from "../../helpers/consts";
import axios from "axios";
import { getOneGame } from "../games/gamesActions";

export const createComment = createAsyncThunk(
    'comments/createComment',
    async ({ productObj, commentObj }, { dispatch }) => {
        const updatedProductObj = { ...productObj };
        const checkCommentKeyInProduct = Object.keys(updatedProductObj).includes('comments');

        if(!checkCommentKeyInProduct) {
            updatedProductObj.comments = [
                commentObj
            ];
        } else {
            updatedProductObj.comments = [
                ...productObj.comments,
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
        const { oneProduct } = getState().games;
        const updatedProduct = { ...oneProduct };
        updatedProduct.comments = updatedProduct.comments.filter(comment => comment.id !== commentId);

        updatedProduct.rating = getProductRating(updatedProduct);

        await axios.patch(`${GAMES_API}/${updatedProduct.id}`, updatedProduct);

        dispatch(getOneGame({ id: updatedProduct.id }));
    }
);