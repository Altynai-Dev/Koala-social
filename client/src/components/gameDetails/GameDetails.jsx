import { useDispatch, useSelector } from 'react-redux';
import './GameDetails.scss';
import { useEffect } from 'react';
import { getOneGame } from '../../store/games/gamesActions';
import { useParams } from 'react-router-dom';
import { clearOneGameState } from '../../store/games/gamesSlice';

const GameDetails = () => {
const {loading, oneGame} = useSelector((state)=>state.games);

const dispatch = useDispatch();
const {id}=useParams();

useEffect(()=>{
    dispatch(getOneGame({id}));
    return ()=> dispatch(clearOneGameState());
},[])
  return (
    <>
    {loading ? (
        <h3>Loading...</h3>
    ):(
        <>
        {oneGame && (
            <div className='gameDetailsContainer'>
            <div className='gameDetails'>
                <div className='left'>
                    <img src={oneGame.img} alt="game" className='gameImg' />
                </div>
                <div className="right">
                    <h2>{oneGame.name}</h2>
                    <p>Price: ${oneGame.price}</p>
                    <p>{oneGame.description}</p>
                </div>
            </div>
        </div>
        )}
    </>
    )}
    </>
    
  )
}

export default GameDetails