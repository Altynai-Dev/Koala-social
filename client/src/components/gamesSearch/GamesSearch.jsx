import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchVal } from "../../store/games/gamesSlice";
import { getGames } from "../../store/games/gamesActions";


const GamesSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  return (
    <div>
      <label htmlFor="Search">
        {" "}
        Search{" "}
      </label>

      <input
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        id="Search"
        placeholder="Search for..."
      />

      <span>
        <button onClick={() => {
          dispatch(setSearchVal({ search: searchValue }));
          dispatch(getGames());
        }} type="button">
          <span>Search</span>
        </button>
      </span>
    </div>
  );
};

export default GamesSearch;
