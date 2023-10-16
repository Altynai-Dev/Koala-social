import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getComments = createAsyncThunk(
    'comments/getComments',
    async(postId)=>{
        const res = await axios.get(`http://localhost:8888/api/comments?postId=${postId}`);
        console.log(res.data);
    }
)