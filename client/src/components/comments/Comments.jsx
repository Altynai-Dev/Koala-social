import { useEffect, useState } from 'react';
import { getAuthUser } from '../../helpers/functions'
import './Comments.scss'
import {useDispatch, useSelector} from 'react-redux';
import { createComment, getComments } from '../../store/comments/commentsActions';
import moment from "moment";

const Comments = ({postId}) => {
  const [desc, setDesc] = useState("");
  const user = getAuthUser();

  const state = useSelector((state)=>state);
  console.log(state)

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getComments(postId));
  });

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch(createComment({ desc, postId }));
    setDesc("");
  };
  return (
    <div className='comments'>
      <div className="write">
        <img src={user.profilePic} alt="person" />
        <input type='text' placeholder='Write a comment' value={desc}
          onChange={(e) => setDesc(e.target.value)} />
        <button onClick={handleClick}>Send</button>
      </div>
          {/* {comments.map(comment => (
            <div className="comment">
              <img src={comment.profilePicture} />
              <div className="info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
              </div>
              <span className='date'>{moment(comment.createdAt).fromNow()}</span>
            </div>
          ))} */}
    </div>
  )
}

export default Comments