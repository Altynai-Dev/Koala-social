import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getGames } from "../../store/games/gamesActions";
import { changeCategory } from "../../store/games/gamesSlice";

const GamesFilter = () => {
  const { categories } = useSelector(state => state.games);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);
   
  return (
    <div>
      <select
        onChange={(e) => {
          dispatch(changeCategory({ category: e.target.value }));
          dispatch(getGames());
        }}
      >
        <option value="all">all</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default GamesFilter;
