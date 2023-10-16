// import './Posts.scss'
// import Post from '../Post/Post'
// import { useEffect } from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import { getPosts } from '../../store/posts/postsActions';

// const Posts = () => {
//   const {posts, loading} = useSelector((state)=>state.posts);
//   const dispatch = useDispatch();

//   useEffect(()=>{
//     dispatch(getPosts());
//   }, []);

//   return (
//     <>
//     {loading ? (
//       <h3>Loading...</h3>
//     ):(
//       <div className='posts'>
//       {posts.map(post => (
//         <Post post={post} key={post.id} />
//       ))}
//     </div>
//     )}
//     </>
//   )
// }

// export default Posts

import Post from "../Post/Post";
import "./Posts.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Posts = ({userId}) => {
  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get(`/posts?userId=${userId}`).then((res) => {
      return res.data;
    })
  );
  return (
    <div className="posts">
      {error
        ? "Something went wrong!"
        : isLoading
        ? "loading"
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};

export default Posts;