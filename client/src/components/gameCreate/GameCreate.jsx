import './GameCreate.scss';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createGame } from '../../store/games/gamesActions';

const GameCreate = () => {
  // const { categories } = useSelector(state => state.products);
  const [game, setGame] = useState({
    name: "",
    img: "",
    price: 0,
    description: ''
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCategories());
  // }, []);

  return (
    <div>
      <h3>Create Card</h3>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setGame({ ...game, name: e.target.value })}
      />

      <input
        type="text"
        placeholder="Image"
        onChange={(e) =>
          setGame({ ...game, img: e.target.value })
        }
      />

      <input
        type="number"
        placeholder="Price"
        onChange={(e) =>
          setGame({ ...game, price: parseInt(e.target.value) })
        }
      />
      <input
        type="text"
        placeholder="Description"
        onChange={(e) =>
          setGame({ ...game, description: e.target.value })
        }
      />

        {/* <select onChange={(e) => setGame({ ...game, type: e.target.value })} className="w-full mb-4 p-3 h-12 border rounded-md">
          <option disabled>Choose category</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select> */}

      {/* <div className="flex flex-row w-full">
        <input
          className="border border-slate-300 w-full h-12 p-3 rounded mb-4"
          type="text"
          placeholder="Picture"
          onChange={(e) => setProduct({ ...product, picture: e.target.value })}
        />
        {product.picture ? (
          <img
            className="m-2 rounded-lg"
            src={product.picture}
            alt={product.name}
            width="100"
            height="100"
          />
        ) : (
          <img
            className="m-2 rounded-lg"
            src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
            alt="avatar"
            width="100"
            height="100"
          />
        )}
      </div> */}
      <button
        onClick={() => {
          dispatch(createGame({ game }));
          navigate("/games");
        }}
      >
        Create
      </button>
    </div>
  );
};

export default GameCreate;
