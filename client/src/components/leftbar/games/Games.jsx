import React from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
const Games = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div onClick={() => navigate("/addcard")}>+</div>
      <Card />
    </div>
  );
};

export default Games;
