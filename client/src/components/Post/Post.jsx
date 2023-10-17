// import './Post.scss'
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
// import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
// import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import { Link } from 'react-router-dom';
// import Comments from '../comments/Comments';
// import { useEffect, useState } from 'react';
// import moment from 'moment';
// import axios from 'axios';
// import { getAuthUser } from '../../helpers/functions';
// import { useDispatch, useSelector } from 'react-redux';
// import { getLikes } from '../../store/likes/likesActions';

// const Post = ({post}) => {
//   const [commentsOpen, setCommentsOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
// const likes = useSelector((state)=>state.likes);
// console.log(likes)
//   //const [likes, setLikes] = useState([]);
//   const dispatch = useDispatch();
//   const currentUser = getAuthUser();
//   // const getLikes = async(postId)=>{
//   //   const {data} = await axios.get(`http://localhost:8888/api/likes?postId=${postId}`);
//   //   setLikes(data)
//   // }

//   useEffect(()=>{
//    dispatch(getLikes(post.id))
//   }, []);

//   const toggleLike = (liked) =>{

//   }  
//   // const mutation = useMutation(
//   //   (liked) => {
//   //     if (liked) return makeRequest.delete("/likes?postId=" + post.id);
//   //     return makeRequest.post("/likes", { postId: post.id });
//   //   },
//   //   {
//   //     onSuccess: () => {
//   //       // Invalidate and refetch
//   //       queryClient.invalidateQueries(["likes"]);
//   //     },
//   //   }
//   // );
//   const handleLike = () =>{

//   }
//   return (
//     <div className='post'>
//       <div className="container">
//       <div className="user">
//         <div className="userInfo">
//           <img src={post.profilePic} alt='person' />
//           <div className="details">
//             <Link to={`/profile/${post.userId}`} style={{textDecoration:"none", color: 'inherit'}}>
//               <span className='name'>{post.name}</span>
//               </Link>
//               <span className='date'>{moment(post.createdAt).fromNow()}</span>
//           </div>
//         </div>
//         <MoreHorizIcon onClick={() => setMenuOpen(!menuOpen)} />
//         {menuOpen && post.userId === currentUser.id && (
//             <button>delete</button>
//           )}
//       </div>
//       <div className="content">
//         <p>{post.desc}</p>
//         <img src={`http://localhost:8888/${post.img}`} alt='post' />
//       </div>
//       {/* <div className="info">
//         <div className="item">
//           {likes.includes(currentUser.id)  ? <FavoriteOutlinedIcon style={{color:"red"}} onClick={handleLike} /> : <FavoriteBorderOutlinedIcon onClick={handleLike} />}
//           {likes.length} Likes
//         </div>
//         <div className="item" onClick={()=>setCommentsOpen(!commentsOpen)}>
//           <TextsmsOutlinedIcon />
//           15 Comments
//         </div>
//         <div className="item">
//           <ShareOutlinedIcon />
//           Share
//         </div>
//       </div> */}
//       {commentsOpen && <Comments postId={post.id} /> }
//       </div>
//     </div>
//   )
// }

// export default Post

import "./Post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";
import moment from "moment";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { getAuthUser } from "../../helpers/functions";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const  currentUser  = getAuthUser();

  const { isLoading, error, data } = useQuery(["likes", post.id], () =>
    makeRequest.get(`/likes?postId=${post.id}`).then((res) => {
      return res.data;
    })
  );
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (liked) => {
      if (liked) return makeRequest.delete(`/likes?postId=${post.id}`);
      return makeRequest.post("/likes", { postId: post.id });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["likes"]);
      },
    }
  );
  const deleteMutation = useMutation(
    (postId) => {
      return makeRequest.delete("/posts/" + postId);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  const handleLike = () => {
    mutation.mutate(data.includes(currentUser.id));
  };

  const handleDelete = () => {
    deleteMutation.mutate(post.id);
  };

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={"/upload/"+post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">{moment(post.createdAt).fromNow()}</span>
            </div>
          </div>
          <MoreHorizIcon onClick={() => setMenuOpen(!menuOpen)}  className="tochki"/>
          {menuOpen && post.userId === currentUser.id && (
            <button onClick={handleDelete}>delete</button>
          )}
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={"./upload/"+post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {isLoading ? (
              "loading"
            ) : data.includes(currentUser.id) ? (
              <FavoriteOutlinedIcon
                style={{ color: "red" }}
                onClick={handleLike}
              />
            ) : (
              <FavoriteBorderOutlinedIcon onClick={handleLike} />
            )}
            {data?.length} Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            See Comments
          </div>
        </div>
        {commentOpen && <Comments postId={post.id} />}
      </div>
    </div>
  );
};

export default Post;