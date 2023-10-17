import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createComment } from "../../store/comments/commentsActions";
import { getAuthUser } from "../../helpers/functions";
import "./commCreate.scss"
const CommentCreate = ({ game }) => {
  const [comment, setComment] = useState({
    commentContent: ''
  });
  const dispatch = useDispatch();
  const user = getAuthUser();
  const addComment = () => {
    if(!comment.commentContent.trim()) return alert('Change input values');

    const commentObj = {
      id: Date.now(),
      body: comment.commentContent,
      user: user.username
    };
    dispatch(createComment({ gameObj: game, commentObj }));

    setComment({
      commentContent: ''
    });

  };

  return (
    <>
      <fieldset>
        <div>
          <input
          className="create"
            onChange={(e) => setComment({ ...comment, commentContent: e.target.value })}
            value={comment.commentContent}
            type="text"
            placeholder="Enter comment content"
          />

          <button
          style={{width:"100px", height:"30px", borderRadius:"5px", marginLeft:"4px", background:"#5271ff"}}
          onClick={() => {
              addComment();
            }}
          >
            Add
          </button>
        </div>
      </fieldset>
    </>
  );
};

export default CommentCreate;
