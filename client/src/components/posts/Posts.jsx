import './Posts.scss'
import Post from '../Post/Post'
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getPosts } from '../../store/posts/postsActions';

const Posts = () => {
  const {posts, loading} = useSelector((state)=>state.posts);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts());
  }, []);

  return (
    <>
    {loading ? (
      <h3>Loading...</h3>
    ):(
      <div className='posts'>
      {posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </div>
    )}
    </>
  )
}

export default Posts