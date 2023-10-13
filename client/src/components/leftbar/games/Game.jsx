import React, { useState, useEffect } from "react";
import axios from "axios";
import EditCard from "./crud/EditCard";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Button, Typography } from "@mui/material";
import "./Game.scss";

const Card = () => {
  const [cards, setCards] = useState([]);
  const [editingCard, setEditingCard] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/cards")
      .then((response) => setCards(response.data));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/cards/${id}`)
      .then(() => setCards(cards.filter((card) => card.id !== id)));
  };

  const handleEdit = (card) => {
    setEditingCard(card);
  };

  const handleUpdate = (updatedCard) => {
    setCards(
      cards.map((card) => (card.id === updatedCard.id ? updatedCard : card))
    );
    setEditingCard(null);
  };

  const handleCancelEdit = () => {
    setEditingCard(null);
  };

  return (
    <div>
      <h1>Карточки</h1>
      {editingCard ? (
        <EditCard
          card={editingCard}
          onUpdate={handleUpdate}
          onCancel={handleCancelEdit}
        />
      ) : (
        <div></div>
      )}
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {cards.map((card) => (
          <li
            key={card.id}
            style={{
              width: "40%",
              marginBottom: "1%",
              border: "1px gray solid",
              borderRadius: "30px",
            }}
          >
            <img
              src={card.image}
              alt=""
              style={{ width: "100%", borderRadius: "30px" }}
            />
            <strong>
              <p>{card.name}</p>
            </strong>
            <Typography variant="body2" color="text.secondary">
              <p>{card.description}</p>
            </Typography>
            {/* <p>type:s{card.type}</p> */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "10% 0",
              }}
            >
              <div>
                <LocalMallIcon />
              </div>

              <p>${card.price}</p>
              <FavoriteBorderIcon />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "5% 0",
              }}
              className="buttons"
            >
              <button onClick={() => handleEdit(card)}>Редактировать</button>
              <button small onClick={() => handleDelete(card.id)}>
                Удалить
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
