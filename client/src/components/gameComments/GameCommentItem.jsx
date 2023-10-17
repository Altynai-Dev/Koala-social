import React from "react";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../store/comments/commentsActions";
import { getAuthUser } from "../../helpers/functions";

const GameCommentItem = ({ comment }) => {
  const dispatch = useDispatch();
  const user = getAuthUser();
  
  return (
    <>
      <div style={{display:"flex", margin:"10px 0"}}>     
        <p>{ comment.user.username }</p>
        <p>{ comment.body }</p>
        {user.username === comment.user && (
        <button
        style={{width:"100px", height:"30px", borderRadius:"5px", marginLeft:"4px", background:"#f0544f"}}

        onClick={() => dispatch(deleteComment({ commentId: comment.id }))}>Delete</button>)}
      </div>
    </>
  );
};

export default GameCommentItem;
