import { useEffect } from 'react';
import './Games.scss';
import {useDispatch, useSelector} from "react-redux";
import { getGames } from '../../store/games/gamesActions';
import { useNavigate } from 'react-router-dom';
import GamesPagination from "../gamesPagination/GamesPagination";
import GamesSearch from '../gamesSearch/GamesSearch';
import GamesFilter from '../gamesFilter/GamesFilter';
import GameItem from '../gameItem/GameItem';

const Games = () => {
    const {loading, games} = useSelector((state)=>state.games)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getGames())
    },[])
  return (
      <>

          {loading ? (
              <h4>Loading...</h4>
          ) : (
              <>
                  <GamesSearch />
                  <GamesFilter />
                  <div>
                 
                      <div className='games'>
                          {
                              games.map((item) =>
                                  <GameItem game={item} key={item.id} />
                              )
                          }
                      </div>
                      
                  </div>
              </>
          )}
      </>  
  )
}

export default Games