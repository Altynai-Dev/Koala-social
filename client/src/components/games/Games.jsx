import { useEffect } from 'react';
import './Games.scss';
import {useDispatch, useSelector} from "react-redux";
import { getGames } from '../../store/games/gamesActions';
import { useNavigate } from 'react-router-dom';

// const data = [
//     {
//         id: "1",
//         name: "Super Mario Bros.™ Wonder",
//         img: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/software/switch/70010000068688/a13441a9532b1c9e90f657ee1c67255de073707543ff6735ceb57b472faec691",
//         price: "59.99",
//         description: "Mario and friends have been invited to visit the colorful Flower Kingdom, just a short hop away from the Mushroom Kingdom. Unfortunately, King Bowser has transformed into a flying castle and is causing chaos across their peaceful land. Now our heroes must save the day—and the Flower Kingdom—in this wonderous new adventure!"
//     },
//     {
//         id: "2",
//         name: "Super Mario RPG™",
//         img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_800/ncom/software/switch/70010000068683/fe4afe940b0e707798332e86f0af56cdbde48da59dc37cdfb8d59febb88ac72a",
//         price: "59.99",
//         description: "Team up with an oddball group of heroes to save Star Road and stop the troublemaking Smithy Gang. This colorful RPG has updated graphics and cinematics that add even more charm to the unexpected alliance between Mario, Bowser, Peach, and original characters Mallow and Geno. Enter (or revisit) this world of eccentric allies and offbeat enemies in an RPG for everyone."
//     },
//     {
//         id: "3",
//         name: "Princess Peach™: Showtime!",
//         img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_800/ncom/software/switch/70010000005022/cd94b037b282fc3415f980bb31e41de61200235dfc7b1532ffc512280fed0bb1",
//         price: "59.99",
//         description: "Princess Peach’s trip to the Sparkle Theater goes off script when the wicked Grape and the Sour Bunch steal the show! Partner with the theater’s guardian, Stella, to call curtains on this tragedy by using a powerful ribbon and taking on several starring roles—each with their own look and abilities."
//     },
//     {
//         id: "4",
//         name: "Mario vs. Donkey Kong™",
//         img: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/software/switch/70010000072191/e03f8a5738ba0876eb1f3d0e359c554031f67e0d90f663a8d536499d40ebdd72",
//         price: "49.99",
//         description: "Run, jump, and backflip your way to rescuing the stolen Mini-Mario toys in this puzzling twist on Mario action. Obstacles like spikes, moving platforms, and falling bricks stand in your way—put your brain to work and figure out the best way to reach the Mini-Marios. The rivalry that originally heated up on the Game Boy™ Advance system reignites on the Nintendo Switch™ system with newly-added co-op play and updated visuals."
//     },
//     {
//         id: "5",
//         name: "Paper Mario™: The Thousand-Year Door",
//         img: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/software/switch/70010000072957/44e69004724c765ebc49965d244999ea6af29a6a8463d9513b77e0aa5c2cb006",
//         price: "49.99",
//         description: "Run, jump, and backflip your way to rescuing the stolen Mini-Mario toys in this puzzling twist on Mario action. Obstacles like spikes, moving platforms, and falling bricks stand in your way—put your brain to work and figure out the best way to reach the Mini-Marios. The rivalry that originally heated up on the Game Boy™ Advance system reignites on the Nintendo Switch™ system with newly-added co-op play and updated visuals."
//     },
// ]

const Games = () => {
    const {loading, games} = useSelector((state)=>state.games)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch(getGames())
    },[])
  return (
    <>
    {loading ? (
        <h4>Loading...</h4>
    ):(
        <div className='games'>
          {
              games.map((item) =>
                  <div key={item.id} className='card' onClick={()=>navigate(`/games/${item.id}`)}>
                      <article className='cardContainer'>
                          <img className='gameImg' alt="pic" src={item.img} />
                          <div className='cardInfo'>
                              <p className='cardPrice'>$ {item.price}</p>
                              <h3 className='cardName'>{item.name}</h3>
                              {/* <p className='cardDesc'>{item.description}</p> */}
                          </div>
                          {/* <div>
                              <ProductLike />
                          </div> */}
                      </article>
                  </div>
              )
          }
      </div>
    )}
    </>  
  )
}

export default Games