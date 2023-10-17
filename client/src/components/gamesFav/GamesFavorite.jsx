import React from 'react'
import { useDispatch } from 'react-redux'
import { addToFavorites } from '../../store/games/gamesActions';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import GradeIcon from '@mui/icons-material/Grade';

const GamesFavorite = ({game}) => {
    const dispatch = useDispatch();

  return (
    <>
        {game.favorites ? (
            <div onClick={()=>dispatch(addToFavorites({...game, favorites: false}))}>
<GradeIcon fontSize="large"/>  
          </div>
        ) : (
            <div onClick={()=>dispatch(addToFavorites({...game, favorites: true}))}>
                 <StarBorderIcon fontSize="large"/>
            </div>
        )}
    </>
  )
}

export default GamesFavorite