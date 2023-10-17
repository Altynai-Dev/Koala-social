import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FavoritItem from './FavoritItem'
import { getFavorites } from '../../store/games/gamesActions'

const FavoritList = () => {
  const {favorites} = useSelector(state => state.games)
  const dispatch = useDispatch()
console.log(favorites)
  useEffect(()=>{
    dispatch(getFavorites())
  }, [])
  
  return (
    <>
    {favorites.length ? (
      <ul style={{display:"flex",flexWrap:"wrap", justifyContent:"space-around", marginTop:"50px"}}>
        {favorites.map(favoriteObj => (
          <FavoritItem key={favoriteObj.id} favoriteObj={favoriteObj} />
        ))}
      </ul>
    ):(
      <h3>No favorites now!</h3>
    )}
    </>
  )

}

export default FavoritList