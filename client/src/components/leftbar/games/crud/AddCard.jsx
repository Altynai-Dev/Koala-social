import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Add.scss";
const AddCard = ({ onAdd }) => {
  const navigate = useNavigate();
  const [newCard, setNewCard] = useState({
    name: "",
    price: 0,
    description: "",
    type: "",
    image: "",
  });

  const handleAdd = () => {
    axios
      .post("http://localhost:8000/cards", newCard)
      .then((response) => onAdd(response.data))
      .catch((error) => console.error("Ошибка при добавлении данных:", error));

    setNewCard({ name: "", price: 0, description: "", type: "", image: "" });
    navigate("/games");
  };

  return (
    <div>
      <h2>Добавить карточку</h2>
      <div
        className="inputs"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label>
          Название:
          <input
            className="inputs"
            type="text"
            value={newCard.name}
            onChange={(e) => setNewCard({ ...newCard, name: e.target.value })}
          />
        </label>
        <label>
          Цена:
          <input
            className="inputs"
            type="number"
            value={newCard.price}
            onChange={(e) => setNewCard({ ...newCard, price: e.target.value })}
          />
        </label>
        <label>
          Описание:
          <input
            className="inputs"
            type="text"
            value={newCard.description}
            onChange={(e) =>
              setNewCard({ ...newCard, description: e.target.value })
            }
          />
        </label>
        <label>
          Тип:
          <input
            className="inputs"
            type="text"
            value={newCard.type}
            onChange={(e) => setNewCard({ ...newCard, type: e.target.value })}
          />
        </label>{" "}
        <label>
          image
          <input
            className="inputs"
            type="text"
            value={newCard.image}
            onChange={(e) => setNewCard({ ...newCard, image: e.target.value })}
          />
        </label>
        <button onClick={handleAdd}>Добавить</button>
      </div>
    </div>
  );
};

export default AddCard;
