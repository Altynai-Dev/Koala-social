import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from 'react-redux'; 
import { toggleGameLike } from '../../store/games/gamesActions';

const GameLike = ({ isLikedGame, likes, gameId }) => {
  const dispatch = useDispatch();
  
  return (
    <>
      {isLikedGame ? (
        <div onClick={() => dispatch(toggleGameLike({ setIsLike: false, likes, gameId }))}>
          <FavoriteIcon fontSize="large" color="error" />
        </div>
      ) : (
        <div onClick={() => dispatch(toggleGameLike({ setIsLike: true, likes, gameId }))}>
          <FavoriteIcon fontSize="large" />
        </div>
      )}
    </>
  )
}

export default GameLike