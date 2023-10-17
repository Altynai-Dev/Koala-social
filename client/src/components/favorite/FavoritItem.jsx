import React from 'react'
import GamesFavorite from '../gamesFav/GamesFavorite'


const FavoritItem = ({favoriteObj}) => {
    
  return (

    <li>
      <p>{favoriteObj.game.name}</p>
      <img src={favoriteObj.game.img} style={{width:"200px"}}/>
      <p>{favoriteObj.game.price}</p>
    < GamesFavorite game={favoriteObj.game} />
    </li>
  )
}

export default FavoritItem