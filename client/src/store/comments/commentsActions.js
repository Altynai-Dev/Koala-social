import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const createComment = createAsyncThunk(
    'comments/createComment',
    async(newComment, {dispatch})=>{
        await axios.post('http://localhost:8888/api/comments', newComment, {
            withCredentials: true
        });
        // dispatch(getComments());
    }
);

export const getComments = createAsyncThunk(
    'comments/getComments',
    async({postId}) => {
        const {data} = await axios.get(`http://localhost:8888/api/comments?postId=${postId}`, {
            withCredentials: true
        })
        return data;
    }
)