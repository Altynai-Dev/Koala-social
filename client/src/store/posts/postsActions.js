import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async()=>{
        const {data} = await axios.get('http://localhost:8888/api/posts', {
            withCredentials: true
        });
        return {data};
    }
)
// export const uploadImage = async (file) => {
//     try {
//       const formData = new FormData();
//       formData.append("file", file);
//       const res = await axios.post("http://localhost:8888/api/upload", formData, {
//         withCredentials: true
//       });
//       console.log(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

export const createPost = createAsyncThunk(
    'posts/createPosts',
    
    async({post}, {dispatch}) =>{
        const res =  await axios.post('http://localhost:8888/api/posts', post, {
            withCredentials: true
        });
        console.log(res)
        //dispatch(getPosts());
    }
)