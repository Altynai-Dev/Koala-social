import React from "react";
import Game from "./Game";
import { useNavigate } from "react-router-dom";
const Games = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div onClick={() => navigate("/addcard")}>+</div>
      <Game />
    </div>
  );
};

export default Games;
