import { useDispatch, useSelector } from 'react-redux';
import './GameDetails.scss';
import { useEffect, useState } from 'react';
import { deleteGame, getOneGame } from '../../store/games/gamesActions';
import { useNavigate, useParams } from 'react-router-dom';
import { clearOneGameState } from '../../store/games/gamesSlice';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { checkGameInCart, toggleGameToCart } from '../../store/cart/cartActions';
import { getCart } from '../../store/cart/cartSlice';
const GameDetails = () => {
const {loading, oneGame} = useSelector((state)=>state.games);
const {cart} = useSelector((state)=>state.cart);
const [isGameInCart, setIsGameInCart] = useState(false);

const dispatch = useDispatch();
const navigate = useNavigate();
const {id}=useParams();

useEffect(()=>{
    dispatch(getOneGame({id}));
    return ()=> dispatch(clearOneGameState());
},[]);

useEffect(()=>{
    if(!oneGame) return;
    if(checkGameInCart(oneGame.id)){
        setIsGameInCart(true);
    }else{
        setIsGameInCart(false);
    }
}, [cart, oneGame]);
  return (
      <>
          {loading ? (
              <h3>Loading...</h3>
          ) : (
              <>
                  {oneGame && (
                      <div className='gameDetailsContainer'>
                          <div className='gameDetails'>
                              <div className='left'>
                                  <img src={oneGame.img} alt="game" className='gameImg' />
                                  <div>
                                      <button onClick={() => {
                                          dispatch(deleteGame({ id: oneGame.id }));
                                          navigate('/games')
                                      }}>Delete</button>
                                      <button onClick={() => {
                                          navigate('/edit-card/' + oneGame.id)
                                      }}>edit</button>
                                      <button onClick={()=>{
                                        toggleGameToCart(oneGame);
                                        dispatch(getCart())
                                      }}>
                                        <AddShoppingCartIcon />
                                      </button>
                                      {isGameInCart ? "Remove From Cart" : "Add To Cart"}
                                  </div>
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