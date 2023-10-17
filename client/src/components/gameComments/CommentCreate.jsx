import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createComment } from "../../store/comments/commentsActions";
import { getAuthUser } from "../../helpers/functions";

const CommentCreate = ({ product }) => {
  const [comment, setComment] = useState({
    commentContent: ''
  });
  const dispatch = useDispatch();

  const addComment = () => {
    if(!comment.commentContent.trim()) return alert('Change input values');

    const commentObj = {
      id: Date.now(),
      body: comment.commentContent,
      user: getAuthUser()
    };

    dispatch(createComment({ productObj: product, commentObj }));

    setComment({
      commentContent: ''
    });

  };

  return (
    <>
      <fieldset>
        <div>
          <input
            onChange={(e) => setComment({ ...comment, commentContent: e.target.value })}
            value={comment.commentContent}
            type="text"
            placeholder="Enter comment content"
          />

          <button
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
