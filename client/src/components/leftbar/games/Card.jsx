import React, { useState, useEffect } from "react";
import axios from "axios";
import EditCard from "./crud/EditCard";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button, Typography } from "@mui/material";
import "./Game.scss";

const Card = () => {
  const [cards, setCards] = useState([]);
  const [likes, setLikes] = useState({});
  const [currentUser, setCurrentUser] = useState("user1");
  const [editingCard, setEditingCard] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/cards").then((response) => {
      const initialLikes = response.data.reduce((acc, card) => {
        const storedLikes = JSON.parse(
          localStorage.getItem(`likes_${card.id}`)
        ) || { count: 0, users: [] };
        acc[card.id] = storedLikes;
        return acc;
      }, {});
      setCards(response.data);
      setLikes(initialLikes);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/cards/${id}`).then(() => {
      setCards(cards.filter((card) => card.id !== id));
      // Удаление лайков из локального хранилища
      localStorage.removeItem(`likes_${id}`);
      // Удаление лайков из состояния
      const updatedLikes = { ...likes };
      delete updatedLikes[id];
      setLikes(updatedLikes);
    });
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

  const handleLike = (cardId) => {
    const updatedLikes = { ...likes };
    const currentUserLikes = updatedLikes[cardId].users;

    if (currentUserLikes.includes(currentUser)) {
      // Если пользователь уже поставил лайк, убираем его
      updatedLikes[cardId].count -= 1;
      updatedLikes[cardId].users = currentUserLikes.filter(
        (user) => user !== currentUser
      );
    } else {
      // Пользователь ставит лайк
      updatedLikes[cardId].count += 1;
      updatedLikes[cardId].users = [...currentUserLikes, currentUser];
    }

    // Сохраняем в локальное хранилище
    localStorage.setItem(
      `likes_${cardId}`,
      JSON.stringify(updatedLikes[cardId])
    );

    setLikes(updatedLikes);
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
              <button onClick={() => handleLike(card.id)}>Like</button>
              <span>{likes[card.id].count}</span>
              <FavoriteIcon />
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
