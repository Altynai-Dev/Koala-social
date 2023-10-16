import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { editGame, getOneGame } from "../../store/games/gamesActions";
import { clearOneGameState } from "../../store/games/gamesSlice";

const GameEdit = () => {
  const { loading, oneGame } = useSelector((state) => state.games);
  const [game, setGame] = useState(oneGame);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  useEffect(() => {
    dispatch(getOneGame({ id }));
    // dispatch(getCategories());
    return () => dispatch(clearOneGameState());
  }, []);

  useEffect(() => {
    if (oneGame) {
      setGame(oneGame);
    }
  }, [oneGame]);

  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          {game && (
            <div>
              <h2>Edit Form</h2>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) =>
                  setGame({ ...game, name: e.target.value })
                }
                value={game.name}
              />

              <input
              
                type="text"
                placeholder="Description"
                onChange={(e) =>
                  setGame({ ...game, description: e.target.value })
                }
                value={game.description}
              />

              <input
                type="text"
                placeholder="Price"
                onChange={(e) =>
                  setGame({ ...game, price: e.target.value })
                }
                value={game.price}
              />

          {/* <select onChange={(e) => setGame({ ...game, type: e.target.value })} value={game.type} className="w-full mb-4 p-3 h-12 border rounded-md">
            <option disabled>Choose category</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select> */}

              <div className="flex flex-row w-full">
                <input
                  className="border border-slate-300 w-full h-12 p-3 rounded mb-4"
                  type="text"
                  placeholder="image"
                  onChange={(e) =>
                    setGame({ ...game, image: e.target.value })
                  }
                  value={game.image}
                />
                {game.image ? (
                  <img
                    className="m-2 rounded-lg"
                    src={game.image}
                    alt={game.name}
                    width="100"
                    height="100"
                  />
                ) : (
                  <img
                    src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                    alt="avatar"
                    width="100"
                    height="100"
                  />
                )}
              </div>
              <button
                onClick={() => {
                  dispatch(editGame({ game }));
                  navigate("/games");
                }}
              >
                Save
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default GameEdit;
