import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchVal } from "../../store/games/gamesSlice";
import { getGames } from "../../store/games/gamesActions";
import "./GamesSearch.scss"


const GamesSearch = () => {
  const {search} = useSelector(state => state.games)
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if(!search) {
      setSearchValue('');
    };
  }, [search]);

  return (
    <div className="search">


      <input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        type="text"
        id="Search"
        placeholder="Search for..."
      />

      <span>
        <button className="Search-btn" onClick={() => {
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
