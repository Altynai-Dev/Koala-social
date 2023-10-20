
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getGames } from "../../store/games/gamesActions";
import { changeCategory } from "../../store/games/gamesSlice";


const GamesFilter = () => {
  const { categories, currentCategory, games } = useSelector(state => state.games);
  const [oneCategory, setOneCategory] = useState('all');
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getCategories());
  }, []);

  // useEffect(() => {
  //   dispatch(changeCategory({ category: oneCategory }));
  //   dispatch(getGames());
  // }, [oneCategory]);

  useEffect(() => {
    if(!currentCategory) {
      setOneCategory('all');
    };
  }, [currentCategory]);
   
  return (
    <div className="w-1/6">
      <select
        value={oneCategory}
        onChange={(e) => setOneCategory(e.target.value)}
        className="mt-1.5 w-full h-9 rounded-lg bg-pink-500 text-white sm:text-sm"
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
