import React, { useState, useEffect } from 'react'
import GameLike from '../gameLike/GameLike'
import { useNavigate } from 'react-router-dom';
import { checkUserLogin, getAuthUser } from '../../helpers/functions';

const GameItem = ({game}) => {
    const [isLikedGame, setIsLikedGame] = useState(false);
// console.log(game.likes);
    const navigate = useNavigate();

    const checkGameLike = () => {
        const user = getAuthUser();
        // console.log(game);
        // console.log(game.likes)
        if(!game.likes ) return;
        const userLike = game.likes.find(like => like.user.username === user.username);
        // console.log(userLike);
        if(userLike) {
          setIsLikedGame(true);
        } else {
          setIsLikedGame(false);
        }
      };
    
      useEffect(() => {
        checkGameLike();
      }, []);

    return (
        <div key={game.id} className='card'>
            <article className='cardContainer'>
                <img className='gameImg' alt="pic" src={game.img} onClick={() => navigate(`/games/${game.id}`)} />
                <div className='cardInfo' onClick={() => navigate(`/games/${game.id}`)}>
                    <p className='cardPrice'>$ {game.price}</p>
                    <h3 className='cardName'>{game.name}</h3>
                    {/* <p className='cardDesc'>{item.description}</p> */}
                </div>
                <div>
                    {checkUserLogin() && (
                        <GameLike isLikedGame={isLikedGame} likes={game.likes} gameId={game.id} />
                    )}
                    {game.likes ? (
                        <span>{game.likes.length}</span>
                    ):(
                        <span>0</span>
                    )}
                </div>
            </article>
        </div>
    )
}

export default GameItem