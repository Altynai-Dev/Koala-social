import React from 'react';
import GameCommentItem from './GameCommentItem';

const GameCommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map(comment => (
        <GameCommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  )
}

export default GameCommentsList