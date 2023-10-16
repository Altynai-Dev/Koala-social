import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getLikes = createAsyncThunk(
    'likes/getLikes',
    async(postId)=>{
        const {data} = await axios.get(`http://localhost:8888/api/likes?postId=${postId}`,{
            withCredentials: true
        });
        console.log(data);
    }
) 