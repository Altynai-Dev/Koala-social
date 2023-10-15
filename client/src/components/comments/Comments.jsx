// import { useEffect, useState } from 'react';
// import { getAuthUser } from '../../helpers/functions'
// import './Comments.scss'
// import moment from "moment";
// import {useDispatch, useSelector} from 'react-redux';
// import { getComments } from '../../store/comments/commentsActions';

// const Comments = ({postId}) => {
//   const [desc, setDesc] = useState("");
//   const user = getAuthUser();
//   const dispatch = useDispatch();
//   const comments = useSelector((state)=>state.comments);
//   console.log(comments)


//   useEffect(()=>{
//     dispatch(getComments(postId))
//   }, [])

//   return (
//     <div className='comments'>
//       <div className="write">
//         <img src={user.profilePic} alt="person" />
//         <input type='text' placeholder='Write a comment' value={desc}
//           onChange={(e) => setDesc(e.target.value)} />
//         {/* <button onClick={handleClick}>Send</button> */}
//       </div>
//           {/* {comments.map(comment => (
//             <div className="comment" key={comment.id}>
//               <img src={comment.profilePicture} />
//               <div className="info">
//                 <span>{comment.name}</span>
//                 <p>{comment.desc}</p>
//               </div>
//               <span className='date'>{moment(comment.createdAt).fromNow()}</span>
//             </div>
//           ))} */}
//     </div>
//   )
// }

// export default Comments

import { useState } from "react";
import "./Comments.scss";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import {getAuthUser} from "../../helpers/functions";

import moment from "moment";

const Comments = ({ postId }) => {
  const [desc, setDesc] = useState("");
  const  currentUser  = getAuthUser();

  const { isLoading, error, data } = useQuery(["comments"], () =>
    makeRequest.get("/comments?postId=" + postId).then((res) => {
      return res.data;
    })
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newComment) => {
      return makeRequest.post("/comments", newComment);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["comments"]);
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ desc, postId });
    setDesc("");
  };

  return (
    <div className="comments">
      <div className="write">
        <img src={"/upload/" + currentUser.profilePic} alt="" />
        <input
          type="text"
          placeholder="write a comment"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button onClick={handleClick}>Send</button>
      </div>
      {error
        ? "Something went wrong"
        : isLoading
        ? "loading"
        : data.map((comment) => (
            <div className="comment" key={comment.id}>
              <img src={"/upload/" + comment.profilePic} alt="" />
              <div className="info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
              </div>
              <span className="date">
                {moment(comment.createdAt).fromNow()}
              </span>
            </div>
          ))}
    </div>
  );
};

export default Comments;